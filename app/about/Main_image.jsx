import Image from "next/image";
import Header_image from "../../public/images/divyang_about.svg";

const Main_image = () => {
  return (
    <div className=" max-w-[100vw] h-[70vh] grid place-items-center ">
      <div className="z-10">
        <Image
          alt="Hero image"
          src={Header_image}
          priority
          objectFit="cover"
          objectPosition="center"
        />
      </div>
    </div>
  );
};

export default Main_image;
