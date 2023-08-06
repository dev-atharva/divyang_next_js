import Searchbar from "./Searchbar";
import Schemes_Table from "./Schemes_Table";

const getschemesdata = async () => {
  try {
    const res = await fetch(
      `${process.env.DOMAIN}/api/schemes`,

    );
    return res.json();
  } catch (error) {
    console.error(error);
  }
};

const page = async () => {
  const schemes = await getschemesdata();
  return (
    <div>
      <Searchbar />
      <Schemes_Table schemes={schemes?.schemes} />
    </div>
  );
};

export default page;
