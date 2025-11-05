import React from 'react';

const SimpleBlog = () => {
  return (
    <div className="min-h-screen bg-[#0D121F] flex items-center justify-center">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold text-white mb-4">¡Blog de Prueba!</h1>
        <p className="text-white/70 mb-6">Este es un componente de prueba para verificar que la ruta funcione.</p>
        <p className="text-green-500">Si puedes ver este mensaje, el problema está en el componente Blog original.</p>
      </div>
    </div>
  );
};

export default SimpleBlog;
