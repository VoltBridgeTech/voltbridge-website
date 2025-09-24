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
  const webhookUrl = 'https://cardiacandvascular.app.n8n.cloud/webhook/6f530718-21ae-4a94-84e0-6b63e856b6be/chat';

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (customMessage?: string) => {
    const messageToSend = customMessage || message;
    if (!messageToSend.trim()) return;

    console.log('Enviando mensaje al backend:', messageToSend);
    console.log('URL del webhook:', webhookUrl);

    // Agregar mensaje del usuario
    const userMessage: Message = {
      id: Date.now(),
      text: messageToSend,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!customMessage) setMessage('');

    try {
      console.log('Realizando petición a:', webhookUrl);
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: messageToSend }),
      });

      console.log('Respuesta recibida, status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error en la respuesta:', response.status, errorText);
        throw new Error(`Error ${response.status}: ${errorText}`);
      }

      const data: ChatResponse = await response.json();
      console.log('Datos recibidos del backend:', JSON.stringify(data, null, 2));
      
      if (!data || typeof data !== 'object') {
        console.error('Formato de respuesta inválido:', data);
        throw new Error('Formato de respuesta inválido del servidor');
      }
      
      const botMessage: Message = {
        id: Date.now() + 1,
        text: data.reply || 'Gracias por tu mensaje. Estoy aquí para ayudarte.',
        sender: 'bot',
        timestamp: new Date(),
        suggestedActions: data.suggestedActions
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error al enviar mensaje:', error);
      const errorText = error instanceof Error ? error.message : 'Error desconocido';
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: `Lo siento, hubo un error al procesar tu mensaje: ${errorText}`,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
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
