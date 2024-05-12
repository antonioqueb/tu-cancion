import React from "react";
import Link from "next/link";


// Componente ButtonPrimary que muestra un botón centrado
const ButtonPrimary = ({contentButton}) => (
  <div className="w-full p-4 flex justify-center items-center">
    <section className="text-gray-600 body-font flex justify-center items-center">
      <button className="bg-red-600 hover:bg-primary-dark text-white font-bold py-6 px-12 rounded-full">
        <Link href="/pagar">
         {contentButton}
        </Link>
      </button>
    </section>
  </div>
);

export default ButtonPrimary;
