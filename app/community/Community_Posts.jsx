import Community_post from "./Community_post";

const getpostsData = async () => {
  try {
    const res = await fetch(`${process.env.DOMAIN}/api/posts`, {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.error(error);
  }
};

const Community_Posts = async () => {
  const posts = await getpostsData();
  return (
    <div className="flex flex-col gap-2 max-w-[88vw] sm:max-w-[52vw] h-auto">
      {posts.posts.map((data_in) => (
        <Community_post
          id={data_in._id}
          key={data_in._id}
          name={data_in.user.name}
          content={data_in.content}
          type={data_in.type}
          image_src={data_in.imageUrl}
          comments={data_in.comments}
        />
      ))}
    </div>
  );
};

export default Community_Posts;
