"use client";
import HeroImage from "../../../public/images/Disabled people.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Hero = () => {
  const router = useRouter();
  return (
    <div className="max-w-screen relative min-h-[60vh] sm:min-h-screen bg-violet-950">
      <div className="absolute top-1/2 left-5 sm:left-10 transform -translate-y-1/2">
        <h1 className="text-white text-4xl font-extrabold my-5">Divyang</h1>
        <h1 className="text-white text-lg font-semibold">
          Divyang is a webapp focused on creating a centralized platform
          disabled individuals.
          <br /> You can find various government schemes related to your
          disability.
        </h1>
        <div className="flex gap-3 flex-row mt-3">
          <button
            onClick={() => router.push("/schemes")}
            className=" bg-transparent border-2 border-blue-400 text-white p-2 hover:text-violet-800 rounded-lg"
          >
            Schemes
          </button>
        </div>
      </div>
      <Image
        src={HeroImage}
        alt="Banner image of disabled people"
        className="absolute top-1/2 right-16 transform -translate-y-1/2 h-[70vh] w-[40vw] rounded-lg hidden sm:block"
      />
    </div>
  );
};

export default Hero;
