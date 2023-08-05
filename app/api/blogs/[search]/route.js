import { NextResponse } from "next/server";
import { connectdb } from "../../../../dbconfig/dbconfig";
import Blog from "../../../../models/Blogsmodel";

connectdb();

export async function GET({ params: { search } }) {
  try {
    const blog = await Blog.find({
      $or: [
        { title: { $regex: search, $options: "i" } },
        { type: { $regex: search, $options: "i" } },
      ],
    });
    if (!blog) {
      return NextResponse.json({ message: "Not found" }, { status: 404 });
    }
    return NextResponse.json({
      blogs: blog,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
