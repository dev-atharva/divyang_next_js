import Image from "next/image";
import Header_image from "../../public/images/divyang_about.svg";

const Main_image = () => {
  return (
    <div className=" max-w-[100vw] h-[70vh] grid place-items-center ">
        <Image
          alt="Hero image"
          src={Header_image}
          priority
          objectFit="none"
          objectPosition="center"
        />
    </div>
  );
};

export default Main_image;
