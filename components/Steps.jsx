import React from "react";
import { FcLike, FcMusic, FcAudioFile } from "react-icons/fc";

// Componente ServiceCard para representar cada tarjeta de servicio
const ServiceCard = ({ IconComponent, title, description }) => (
  <div className="flex flex-col items-center justify-center text-center p-4 md:p-6">
    <div className="text-6xl md:text-8xl p-4 flex items-center justify-center">
      <IconComponent />
    </div>
    <h2 className="text-xl md:text-2xl font-semibold mt-2">{title}</h2>
    <p className="text-base md:text-lg mt-1">{description}</p>
  </div>
);

// Componente Steps que organiza los ServiceCards en un grid
const Steps = () => (
  <div className="py-8">
    <div className="mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-around items-center">
        <ServiceCard
          IconComponent={() => <FcLike />}
          title="Cuéntanos tu historia"
          description="Cuéntanos tu historia corta, el estilo de canción que quieres, nosotros haremos lo demás."
        />
        <ServiceCard
          IconComponent={() => <FcMusic />}
          title="Componemos"
          description="Escribiremos la letra y compondremos la música, la magia comienza."
        />
        <ServiceCard
          IconComponent={() => <FcAudioFile />}
          title="Envío de Canción"
          description="En menos de 48 horas enviamos 2 versiones para que escojas la que más te guste."
        />
      </div>
    </div>
  </div>
);

export default Steps;
