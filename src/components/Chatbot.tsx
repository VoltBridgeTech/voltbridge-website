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

interface ChatResponse {
  reply: string;
  suggestedActions?: string[];
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const webhookUrl = 'https://cardiacandvascular.app.n8n.cloud/webhook/5414ea8c-e2d3-422d-a173-51911bc7e781/chat';

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (customMessage?: string) => {
    const messageToSend = customMessage || message;
    if (!messageToSend.trim()) return;

    // Agregar mensaje del usuario
    const userMessage = {
      id: Date.now(),
      text: messageToSend,
      sender: 'user' as const,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    if (!customMessage) setMessage('');

    // Agregar mensaje de carga
    const loadingMessage = {
      id: Date.now() + 0.5,
      text: 'Procesando tu solicitud...',
      sender: 'bot' as const,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, loadingMessage]);

    try {
      console.log('Enviando mensaje al backend:', messageToSend);
      console.log('URL del webhook:', webhookUrl);
      
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 segundos de timeout

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ 
          message: messageToSend,
          chatKey: 'website-chat',
          metadata: {
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
          }
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);
      console.log('Respuesta recibida, status:', response.status);
      
      // Eliminar mensaje de carga
      setMessages(prev => prev.filter(msg => msg.id !== loadingMessage.id));

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error en la respuesta:', response.status, errorText);
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      // Obtener el tipo de contenido de la respuesta
      const contentType = response.headers.get('content-type');
      let responseData;

      if (contentType && contentType.includes('application/json')) {
        responseData = await response.json();
      } else {
        const text = await response.text();
        console.log('Respuesta en texto plano:', text);
        // Intentar parsear como JSON aunque el header no lo indique
        try {
          responseData = JSON.parse(text);
        } catch (e) {
          responseData = { reply: text };
        }
      }
      
      console.log('Datos de respuesta procesados:', responseData);
      
      // Verificar si la respuesta tiene el formato esperado
      if (!responseData || typeof responseData !== 'object') {
        console.error('Formato de respuesta inválido:', responseData);
        throw new Error('Formato de respuesta inválido del servidor');
      }
      
      const botMessage: Message = {
        id: Date.now() + 1,
        text: responseData.reply || responseData.message || 'Gracias por tu mensaje. Estoy aquí para ayudarte.',
        sender: 'bot',
        timestamp: new Date(),
        suggestedActions: responseData.suggestedActions
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error: unknown) {
      console.error('Error completo:', error);
      
      // Mostrar mensaje de error más detallado
      let errorMessageText = 'Lo siento, hubo un error al procesar tu mensaje.';
      
      if (error instanceof Error) {
        console.error('Mensaje de error:', error.message);
        console.error('Stack trace:', error.stack);
        
        if (error.name === 'AbortError') {
          errorMessageText = 'La solicitud está tardando demasiado. Por favor, inténtalo de nuevo.';
        } else if (error.message.includes('Failed to fetch')) {
          errorMessageText = 'No se pudo conectar con el servidor. Por favor, verifica tu conexión a internet.';
        } else if (error.message.includes('500')) {
          errorMessageText = 'Error interno del servidor. Por favor, inténtalo de nuevo más tarde.';
        } else if (error.message.includes('404')) {
          errorMessageText = 'No se encontró el recurso solicitado. Por favor, verifica la configuración.';
        } else if (error.message) {
          errorMessageText = `Error: ${error.message}`;
        }
      }
      
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: errorMessageText,
        sender: 'bot',
        timestamp: new Date(),
      };
      
      // Eliminar el mensaje de carga si existe
      setMessages(prev => [
        ...prev.filter(msg => !msg.text.includes('Procesando')),
        errorMessage
      ]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
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
          }}
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
        width: 350,
        maxWidth: '90vw',
        height: 500,
        maxHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 1000,
        overflow: 'hidden',
      }}
    >
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
        <Typography variant="h6">Asistente Virtual</Typography>
        <IconButton
          color="inherit"
          onClick={() => setIsOpen(false)}
          size="small"
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          p: 2,
          bgcolor: 'background.default',
        }}
      >
        {messages.length === 0 ? (
          <Box
            sx={{
              display: 'flex',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'text.secondary',
            }}
          >
            <Typography variant="body2" align="center">
              ¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?
            </Typography>
          </Box>
        ) : (
          messages.map((msg) => (
            <Box
              key={msg.id}
              sx={{
                display: 'flex',
                justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                mb: 2,
              }}
            >
              <Paper
                sx={{
                  p: 1.5,
                  maxWidth: '80%',
                  bgcolor: msg.sender === 'user' ? 'primary.main' : 'grey.200',
                  color: msg.sender === 'user' ? 'white' : 'text.primary',
                  borderRadius: 2,
                  borderTopLeftRadius: msg.sender === 'user' ? 12 : 2,
                  borderTopRightRadius: msg.sender === 'user' ? 2 : 12,
                }}
              >
                <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>{msg.text}</Typography>
                {msg.suggestedActions && msg.suggestedActions.length > 0 && (
                  <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {msg.suggestedActions.map((action, index) => (
                      <Button
                        key={index}
                        variant="outlined"
                        size="small"
                        onClick={() => handleSendMessage(action)}
                        sx={{
                          fontSize: '0.7rem',
                          textTransform: 'none',
                          borderRadius: 4,
                          borderColor: 'primary.main',
                          color: 'primary.main',
                          '&:hover': {
                            backgroundColor: 'action.hover',
                            borderColor: 'primary.dark',
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
                    mt: 1,
                    color: msg.sender === 'user' ? 'rgba(255, 255, 255, 0.7)' : 'text.secondary',
                    fontSize: '0.6rem',
                  }}
                >
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </Typography>
              </Paper>
            </Box>
          ))
        )}
        <div ref={messagesEndRef} />
      </Box>

      <Box
        sx={{
          p: 2,
          borderTop: '1px solid',
          borderColor: 'divider',
          bgcolor: 'background.paper',
        }}
      >
        <Box sx={{ display: 'flex', gap: 1 }}>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            placeholder="Escribe tu mensaje..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            multiline
            maxRows={4}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 4,
                bgcolor: 'background.paper',
              },
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleSendMessage()}
            disabled={!message.trim()}
            sx={{
              minWidth: 'auto',
              borderRadius: '50%',
              width: 40,
              height: 40,
              alignSelf: 'flex-end',
            }}
          >
            <SendIcon fontSize="small" />
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default Chatbot;
