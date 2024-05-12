
import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center flex-col bg-white text-gray-800">
   
      <main className="px-12 py-8 max-w-2xl">
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Política de Privacidad</h2>
          <p>Se informa a los usuarios de tucancion.com.mx de su política de protección de datos de carácter personal. La utilización de tucancion.com.mx y de cualquiera de los servicios que se ofrecen presupone la plena aceptación de las condiciones que se manifiestan en la política de privacidad que se expone.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Recopilación de Datos</h2>
          <p>Dando cumplimiento a la Mexicana a la protección de datos a particulares, se informa que los datos de carácter personal que se solicitan en nuestros formularios se incluirán en un fichero de datos personales, y que la responsable y titular del mismo es tucancion.com.mx.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Finalidades del Tratamiento</h2>
          <p>Los datos facilitados nunca serán utilizados con una finalidad diferente de aquella para la cual han sido cedidos, y serán cancelados inmediatamente después de dejar de ser necesarios para esta finalidad, excepto cuando una ley establezca otra cosa.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Seguridad</h2>
          <p>tucancion.com.mx ha adoptado los niveles de seguridad de protección de datos personales requeridos legalmente y ha instalado los medios y medidas técnicas a su alcance para evitar la pérdida, el mal uso, la alteración de los datos personales facilitados y el acceso no autorizado a estos datos.</p>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
