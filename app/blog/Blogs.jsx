import Blog_card from "./Blog_card"

const Blogs = () => {
  return (
    <div className="max-w-[100vw] min-h-[70vh]  p-2 grid gap-1 place-items-center grid-cols-1 sm:grid-cols-4">
        <Blog_card/>
        <Blog_card/>
        <Blog_card/>
        <Blog_card/>
        <Blog_card/>
        <Blog_card/>
    </div>
  )
}

export default Blogs
