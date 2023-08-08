import Blog_card from "./Blog_card";
const getblogsdata = async () => {
  try {
    const res = await fetch(`${process.env.DOMAIN}/api/blogs`, {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.error(error);
  }
};

const Blogs = async () => {
  const blogs = await getblogsdata();
  return (
    <div className="max-w-[100vw] min-h-[70vh]  p-2 grid gap-1 place-items-center grid-cols-1 sm:grid-cols-4">
      {blogs?.blogs?.map((blog) => (
        <Blog_card
          key={blog._id}
          title={blog.title}
          type={blog.type}
          body={blog.body}
          caption={blog.caption}
          image_url={blog.image_url}
          author={blog.author}
        />
      ))}
    </div>
  );
};

export default Blogs;
