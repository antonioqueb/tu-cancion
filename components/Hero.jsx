import Image from "next/image";
import Steps from "./Steps";
import ButtonPrimary from "./ui/ButtonPrimary";

export default function Hero() {
    return (
        <div className="w-full hero min-h-screen bg-white">
        <div className="hero-content flex flex-col justify-center text-center">
            <div className="">
            <h1 className="text-[2rem] md:text-7xl font-bold pt-9">Tu Composición Mágica</h1>
            <p className="py-3 text-sm md:py-6 text-xl md:text-2xl">Donde tus historias cobran vida a través de la música.</p>
            <Steps />
            <ButtonPrimary contentButton="¡Quiero mi canción!"/>
            </div>
        </div>
        </div>
    )
}
