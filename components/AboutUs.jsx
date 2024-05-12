import React from 'react';
import Image from 'next/image';
import ButtonPrimary from './ui/ButtonPrimary';

// Componente AboutUs que muestra un botón centrado
const AboutUs = () => (
  <>
    <section  id="nosotros"  className="py-14 lg:py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative flex justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-1 justify-center items-center">
          <div className="flex items-center justify-center flex-col">
            <div className="w-full flex flex-col justify-center items-center">
              <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9">
                QUIÉNES SOMOS
              </h2>
              <h4 className="font-manrope font-bold text-1xl lg:text-2xl text-black mb-9">
                TE COMPONEMOS TU CANCIÓN
              </h4>
              <p className="font-normal text-xl leading-8 text-gray-500  max-w-2xl ">
                Bienvenido a TuCancion.com.mx, el lugar donde tus historias se convierten en melodías memorables. Somos un equipo de compositores y músicos apasionados dedicados a crear canciones personalizadas que reflejen tus emociones, tus recuerdos y tus sueños.
                <br/><br/>
                En TuCancion.com.mx, entendemos que cada persona tiene una historia única que contar. Ya sea que desees expresar tu amor por tu pareja, honrar a un ser querido, celebrar un momento especial o simplemente capturar tus pensamientos y sentimientos en música, estamos aquí para ayudarte.
                <br/><br/>
                Nuestro proceso es simple y personalizado. Comienza compartiendo con nosotros tus ideas, tus experiencias y tus emociones a través de un formulario en línea. Nuestro talentoso equipo de compositores tomará esos detalles y los transformará en una hermosa letra y melodía que sea única para ti.
                <br/><br/>
                Una vez que recibas tu canción personalizada, estarás listo para compartir momentos inolvidables con tus seres queridos. Ya sea que la uses como una sorpresa romántica, un regalo de cumpleaños inolvidable o simplemente para expresar tus sentimientos más profundos, tu canción será el reflejo perfecto de tu corazón.
                <br/><br/>
                En TuCancion.com.mx, creemos en el poder de la música para conectar, emocionar y celebrar la vida. Únete a nosotros hoy y deja que tu historia se convierta en una canción que perdure para siempre. ¡Estamos emocionados de ser parte de tu viaje musical!
              </p>
            </div>
            <div className="w-full flex justify-center items-center py-8">
              <Image src="/firma.png" alt="About Us" width={150} height={150} />
            </div>
            <ButtonPrimary contentButton="¡Quiero mi canción!" />
          </div>
        </div>
      </div>
    </section>
  </>
);

export default AboutUs;
