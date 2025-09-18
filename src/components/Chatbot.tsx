import { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // Añadir el CSS del chat
    const link = document.createElement('link');
    link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Crear el script del chat
    const script = document.createElement('script');
    script.type = 'module';
    script.innerHTML = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

      createChat({
        webhookUrl: 'https://cardiacandvascular.app.n8n.cloud/webhook/cb0a2072-5af0-4cfa-bee2-3a024449e6a1/chat',
        config: {
          headerTitle: '¿En qué podemos ayudarte?',
          welcomeMessage: '¡Hola! Soy el asistente virtual de VoltBridge. ¿En qué puedo ayudarte hoy?',
          containerStyle: {
            width: '400px',
            height: '600px',
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: '9999',
            border: '1px solid #ccc',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
          },
          defaultOpen: true,
          showChatButton: true
        },
      });
    `;
    
    // Añadir el script al final del body
    document.body.appendChild(script);

    // Limpieza
    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
      
      // Eliminar cualquier contenedor de chat creado
      const chatContainer = document.querySelector('.n8n-chat-container');
      if (chatContainer) {
        document.body.removeChild(chatContainer);
      }
    };
  }, []);

  return null; // No renderizamos nada directamente, ya que el chat se monta en el body
};

export default Chatbot;
