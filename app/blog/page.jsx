import Options from "./Options";
import Blogs from "./Blogs"

const page = () => {
  return (
    <div className="pt-12 flex flex-col gap-2">
      <Options />
      <Blogs/>
    </div>
  );
};

export default page;
