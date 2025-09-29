import React, { useState, useRef, useEffect } from 'react';
import { Box, Button, TextField, Paper, Typography, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import ChatIcon from '@mui/icons-material/Chat';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  suggestedActions?: string[];
}

type ChatResponse = {
  reply?: string;
  output?: string;
  message?: string;
  text?: string;
  suggestedActions?: string[];
  success?: boolean;
  [key: string]: any; // Para permitir propiedades adicionales
} | string | Array<any>; // También puede ser un string directo o un array

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [sessionId] = useState(`session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // URL del webhook de n8n
  const webhookUrl = 'https://cardiacandvascular.app.n8n.cloud/webhook/webhook/voltbridge-chat';
  console.log('🌐 Using webhook URL:', webhookUrl);

  const scrollToBottom = React.useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      scrollToBottom();
    }, 100);
    return () => clearTimeout(timer);
  }, [messages, scrollToBottom]);

  useEffect(() => {
    // Enviar mensaje de bienvenida cuando se abre el chat por primera vez
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: Date.now(),
        text: 'Hi, welcome to VoltBridge! What would you like to do today?\n\n1. Support\n2. Get a free energy comparison\n3. FAQ',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);

  // Función para manejar el envío del mensaje
  const handleSend = () => {
    if (message.trim()) {
      handleSendMessage();
    }
  };

  const handleSendMessage = async (customMessage?: string) => {
    try {
      const messageToSend = customMessage || message;
      if (!messageToSend.trim()) return;

      // Agregar mensaje del usuario
      const userMessage: Message = {
        id: Date.now(),
        text: messageToSend,
        sender: 'user',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, userMessage]);
      if (!customMessage) setMessage('');

      // Agregar indicador de escritura
      const typingIndicator: Message = {
        id: Date.now() + 0.5,
        text: '●●●',
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, typingIndicator]);

      try {
        console.log('📤 Sending message to VoltBridge backend');
        console.log('Session ID:', sessionId);
        console.log('Message:', messageToSend);
        
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 30000);

        const requestBody = {
          message: messageToSend,
          chatKey: sessionId,
          sessionId: sessionId,
          language: 'en',
          timestamp: new Date().toISOString(),
        };

        console.log('Request body:', requestBody);

        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify(requestBody),
          signal: controller.signal
        });

        clearTimeout(timeoutId);
        
        // Eliminar indicador de escritura
        setMessages(prev => prev.filter(msg => msg.text !== '●●●'));

        console.log('📥 Response status:', response.status);
        console.log('Response headers:', Object.fromEntries(response.headers.entries()));

        if (!response.ok) {
          const errorText = await response.text();
          console.error('❌ Error response:', errorText);
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const responseText = await response.text();
        console.log('📄 Raw response:', responseText);

        let responseData: ChatResponse;
        try {
          responseData = JSON.parse(responseText);
          console.log('✅ Parsed response:', responseData);
        } catch (parseError) {
          console.error('❌ JSON parse error:', parseError);
          throw new Error('Invalid JSON response from server');
        }

        // Validar la estructura de la respuesta
        console.log('🔍 Response data structure:', JSON.stringify(responseData, null, 2));
        
        if (!responseData || typeof responseData !== 'object') {
          console.error('❌ Invalid response structure:', responseData);
          throw new Error('Invalid response structure: Expected an object');
        }

        // Extraer el texto de respuesta
        let botResponseText: string = 'I apologize, but I received an unexpected response. Please try again.';
        
        // Intentar diferentes formatos de respuesta comunes
        if (typeof responseData === 'string') {
          // Si la respuesta es directamente un string
          botResponseText = responseData;
        } else if (responseData && typeof responseData === 'object' && !Array.isArray(responseData)) {
          // Si es un objeto, buscar campos de respuesta comunes
          if (typeof responseData.reply === 'string') {
            botResponseText = responseData.reply;
          } else if (typeof responseData.output === 'string') {
            botResponseText = responseData.output;
          } else if (typeof responseData.message === 'string') {
            botResponseText = responseData.message;
          } else if (typeof responseData.text === 'string') {
            botResponseText = responseData.text;
          }
        } else if (Array.isArray(responseData) && responseData.length > 0) {
          // Si la respuesta es un array, intentar extraer texto del primer elemento
          const firstItem = responseData[0];
          if (typeof firstItem === 'string') {
            botResponseText = firstItem;
          } else if (firstItem && typeof firstItem === 'object') {
            // Buscar cualquier campo de texto en el primer objeto
            const textField = Object.entries(firstItem).find(
              ([key, value]) => typeof value === 'string' && value.length > 0
            );
            botResponseText = textField ? String(textField[1]) : 'I received an empty response.';
          }
        }

        console.log('💬 Bot response text:', botResponseText);

        const botMessage: Message = {
          id: Date.now() + 1,
          text: botResponseText,
          sender: 'bot',
          timestamp: new Date(),
          suggestedActions: (responseData && typeof responseData === 'object' && !Array.isArray(responseData) && responseData.suggestedActions) || [],
        };

        setMessages(prev => [...prev, botMessage]);
        
      } catch (error: unknown) {
        console.error('❌ Error details:', error);
        
        // Eliminar indicador de escritura si aún existe
        setMessages(prev => prev.filter(msg => msg.text !== '●●●'));

        let errorMessageText = 'I apologize, but I\'m having trouble connecting. Please try again or email us at support@voltbridge.co.uk';
        
        if (error instanceof Error) {
          console.error('Error name:', error.name);
          console.error('Error message:', error.message);
          
          if (error.name === 'AbortError') {
            errorMessageText = 'The request is taking too long. Please check your connection and try again.';
          } else if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
            errorMessageText = 'Unable to connect to the chat service. Our team has been notified. Please try again later or contact support@voltbridge.co.uk';
          } else if (error.message.includes('Invalid JSON') || error.message.includes('404')) {
            errorMessageText = 'The chat service is temporarily unavailable. Please try again later or email us at support@voltbridge.co.uk';
          } else if (error.message.includes('401') || error.message.includes('403')) {
            errorMessageText = 'Authentication error. Please refresh the page and try again.';
          } else if (error.message.includes('500')) {
            errorMessageText = 'Server error. Our team has been notified. Please try again later.';
          }
        }
        
        const errorMessage: Message = {
          id: Date.now() + 1,
          text: errorMessageText,
          sender: 'bot',
          timestamp: new Date(),
        };
        
        setMessages(prev => [...prev, errorMessage]);
      }
    } catch (error) {
      console.error('Unexpected error in handleSendMessage:', error);
      // Asegurarse de eliminar el indicador de escritura en caso de error
      setMessages(prev => prev.filter(msg => msg.text !== '●●●'));
      
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: 'An unexpected error occurred. Please try again.',
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, errorMessage]);
    }
  };

  if (!isOpen) {
    return (
      <Box
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 1000,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => setIsOpen(true)}
          sx={{
            borderRadius: '50%',
            width: 60,
            height: 60,
            minWidth: 'auto',
            padding: 0,
            boxShadow: 3,
            '&:hover': {
              transform: 'scale(1.05)',
              transition: 'transform 0.2s',
            },
          }}
          aria-label="Open chat"
        >
          <ChatIcon fontSize="large" />
        </Button>
      </Box>
    );
  }

  return (
    <Paper
      elevation={3}
      sx={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        width: 380,
        maxWidth: '90vw',
        height: 550,
        maxHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 1000,
        overflow: 'hidden',
        borderRadius: 2,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          p: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            VoltBridge Assistant
          </Typography>
          <Typography variant="caption" sx={{ opacity: 0.9 }}>
            Online • Typically replies instantly
          </Typography>
        </Box>
        <IconButton
          color="inherit"
          onClick={() => setIsOpen(false)}
          size="small"
          aria-label="Close chat"
        >
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Messages Area */}
      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          p: 2,
          bgcolor: '#f5f5f5',
          '&::-webkit-scrollbar': {
            width: '6px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#888',
            borderRadius: '3px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#555',
          },
        }}
      >
        {messages.map((msg) => (
          <Box
            key={msg.id}
            sx={{
              display: 'flex',
              justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
              mb: 2,
              animation: 'fadeIn 0.3s ease-in',
              '@keyframes fadeIn': {
                from: { opacity: 0, transform: 'translateY(10px)' },
                to: { opacity: 1, transform: 'translateY(0)' },
              },
            }}
          >
            <Paper
              sx={{
                p: 1.5,
                maxWidth: '80%',
                bgcolor: msg.sender === 'user' ? 'primary.main' : 'white',
                color: msg.sender === 'user' ? 'white' : 'text.primary',
                borderRadius: 2,
                borderTopLeftRadius: msg.sender === 'user' ? 12 : 2,
                borderTopRightRadius: msg.sender === 'user' ? 2 : 12,
                boxShadow: 1,
              }}
            >
              <Typography 
                variant="body2" 
                sx={{ 
                  whiteSpace: 'pre-line',
                  wordBreak: 'break-word',
                }}
              >
                {msg.text}
              </Typography>
              
              {msg.suggestedActions && msg.suggestedActions.length > 0 && (
                <Box sx={{ mt: 1.5, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {msg.suggestedActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="outlined"
                      size="small"
                      onClick={() => handleSendMessage(action)}
                      sx={{
                        fontSize: '0.75rem',
                        textTransform: 'none',
                        borderRadius: 5,
                        py: 0.5,
                        px: 1.5,
                        borderColor: 'primary.main',
                        color: 'primary.main',
                        '&:hover': {
                          backgroundColor: 'primary.main',
                          color: 'white',
                          borderColor: 'primary.main',
                        },
                      }}
                    >
                      {action}
                    </Button>
                  ))}
                </Box>
              )}
              
              <Typography
                variant="caption"
                sx={{
                  display: 'block',
                  textAlign: 'right',
                  mt: 0.5,
                  color: msg.sender === 'user' ? 'rgba(255, 255, 255, 0.7)' : 'text.secondary',
                  fontSize: '0.65rem',
                }}
              >
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </Typography>
            </Paper>
          </Box>
        ))}
        <div ref={messagesEndRef} />
      </Box>

      {/* Input Area */}
      <Box
        sx={{
          p: 2,
          borderTop: '1px solid',
          borderColor: 'divider',
          bgcolor: 'background.paper',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', p: 1, width: '100%' }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type a message..."
            value={message}
            onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setMessage(e.target.value)}
            onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                if (message.trim()) {
                  handleSendMessage();
                }
              }
            }}
            multiline
            maxRows={4}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '24px',
                padding: '8px 16px',
              },
            }}
          />
          <IconButton
            color="primary"
            onClick={handleSend}
            disabled={!message.trim()}
            aria-label="Send message"
            sx={{
              ml: 1,
              backgroundColor: 'primary.main',
              color: 'white',
              '&:hover': {
                backgroundColor: 'primary.dark',
              },
              '&.Mui-disabled': {
                backgroundColor: 'action.disabledBackground',
                color: 'action.disabled',
              },
            }}
          >
            <SendIcon />
          </IconButton>
        </Box>
        
        <Typography 
          variant="caption" 
          sx={{ 
            display: 'block',
            textAlign: 'center',
            mt: 1,
            color: 'text.secondary',
            fontSize: '0.65rem',
          }}
        >
          Powered by VoltBridge AI
        </Typography>
      </Box>
    </Paper>
  );
};

export default Chatbot;
