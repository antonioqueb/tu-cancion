import React from "react";

const Faq = () => (
  <section className="flex flex-col justify-center items-center ">
  <div className="px-12 max-w-3xl bg-white  md:p-8">
    <h2 className="text-xl md:text-2xl font-bold text-center mb-6">PREGUNTAS FRECUENTES</h2>
    <div className="space-y-4">
      <div>
        <h3 className="font-semibold text-xl">¿Cuánto tardará mi canción en llegar?</h3>
        <p>Después de realizar tu pedido, nos comprometemos a comenzar de inmediato a trabajar en tu canción. Nuestro objetivo es entregarte el producto final en menos de 48 horas. Te mantendremos informado sobre el progreso a través de correo electrónico, WhatsApp o llamada telefónica.</p>
      </div>
      <div>
        <h3 className="font-semibold text-xl">¿Debo escribir yo la letra?</h3>
        <p>¡Para nada! Cuéntanos sobre el tema que deseas que aborde tu canción y qué tipo de música te gusta. Nos esforzaremos al máximo para entregarte una canción mágica que se ajuste perfectamente a tus gustos y emociones. Nuestro objetivo es convertir tus ideas en una melodía inolvidable. ¡Confía en nosotros para crear la canción perfecta para ti!</p>
      </div>
      <div>
        <h3 className="font-semibold text-xl">¿En qué formato se entrega la canción?</h3>
        <p>En mp3 por email y whatsapp. La podrás llevar en tu ordenador, tu móvil o guardarla en un pendrive.</p>
      </div>
      <div>
        <h3 className="font-semibold text-xl">¿En qué idiomas o lenguas puedo solicitar mi canción?</h3>
        <p>Ya sea en español o en inglés, tu canción será una composición mágica en ambas formas.</p>
      </div>
    </div>
  </div>
 </section>
);

export default Faq;
