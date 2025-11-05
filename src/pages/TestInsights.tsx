import React from 'react';

const TestInsights = () => {
  return (
    <div className="min-h-screen bg-[#0D121F] flex items-center justify-center">
      <div className="text-center p-8">
        <h1 className="text-3xl font-bold text-white mb-4">¡Página de Prueba de Insights!</h1>
        <p className="text-white/70 mb-6">Si puedes ver este mensaje, el problema está en el componente Blog.</p>
        <a 
          href="/insights" 
          className="inline-flex items-center text-[#0D76FA] hover:text-[#b100cd] transition-colors"
        >
          Volver a Insights
        </a>
      </div>
    </div>
  );
};

export default TestInsights;
