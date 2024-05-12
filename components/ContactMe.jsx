import React from "react";
import Image from 'next/image'; // Importa Image de Next.js
import { FaPhone, FaRegClock } from 'react-icons/fa'; // Importa los íconos de teléfono y reloj de react-icons

const ContactMe = () => (
  <div id="contacto" className="container mt-6 mb-6 mx-auto px-4 sm:px-6">
    <section className="mb-32">
      <div className="relative h-[300px] overflow-hidden">
        <Image
          src="/brooks-leibee-562087-unsplash.webp"
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="Background Image"
        />
      </div>
      <div className="container px-4 sm:px-12">
        <div
          className="block rounded-lg bg-white bg-opacity-80 px-4 py-12 shadow-lg shadow-gray-300/30 dark:bg-black dark:bg-opacity-70 dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-lg">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full lg:w-5/12 px-3">
              <h2 className="text-xl md:text-2xl font-bold mb-4">LLÁMANOS</h2>
              <div className="flex items-center mb-4">
                <FaRegClock className="h-6 w-6 text-red-600 mr-2" />
                <p className="text-base md:text-lg">Horario: 12:00 a 18:00 L-V</p>
              </div>
              <div className="flex items-center">
                <FaPhone className="h-6 w-6 text-red-600 mr-2" />
                <p className="text-base md:text-lg font-semibold">+52 (33) 2101-2246</p>
              </div>
            </div>
            <div className="w-full lg:w-7/12 px-3">
          
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default ContactMe;
