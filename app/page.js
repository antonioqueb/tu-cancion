'use client'
import Hero from "../components/Hero";
import Faq from "../components/Faq";
import CardMusic from "../components/CardMusic"; // Asegúrate de que la ruta sea correcta
import ContactMe from "../components/ContactMe";
import Testimonials from "../components/Testimonials";
import ButtonPrimary from "../components/ui/ButtonPrimary";
import AboutUs from "../components/AboutUs";


export default function Home() {
  return (
    <>
      <Hero />
      <Faq />
      <div className="container max-w-7xl flex flex-col-reverse  justify-between items-center mx-auto px-4 py-24 lg:flex-row">
    <CardMusic
      iconColor="red-200"
      songTitle="MAYO FLORECE"
      artistName="PARA MAMA MARTHA"
      likeIconColor="red-500"
      volumeControlWidth="90%"
      playTime="0%"
      totalTime="3:10"
      timeElapsed="0:32"
      imageUrl="/escape-artiste-730532-unsplash.webp"
    />
    <CardMusic
      iconColor="red-200"
      songTitle="10 DE MAYO"
      artistName="PARA MAMA MARTHA"
      likeIconColor="red-500"
      volumeControlWidth="10%"
      playTime="0%"
      totalTime="3:30"
      timeElapsed="0:11"
      imageUrl="/lucas-sankey-676386-unsplash.webp"
    />
    <CardMusic
      iconColor="red-200"
      songTitle="DÍA DE MAMA"
      artistName="PARA MAMA MARTHA"
      likeIconColor="red-500"
      volumeControlWidth="20%"
      playTime="0%"
      totalTime="2:50"
      timeElapsed="0:21"
      imageUrl="/brooks-leibee-562087-unsplash.webp"
    />
  </div>
      <ContactMe/>
      <Testimonials/>
      <ButtonPrimary contentButton="¡Quiero mi canción!"/>
      <AboutUs/>
    </>
  );
}
