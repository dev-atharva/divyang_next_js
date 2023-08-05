import Info_banner from "./Info_banner";
import Information from "./Information";

const Info = () => {
  return (
    <div className="min-h-[60vh] max-w-[100vw] flex flex-col sm:flex-row  items-center justify-center  p-1">
      <Info_banner />

      <Information />
    </div>
  );
};

export default Info;
