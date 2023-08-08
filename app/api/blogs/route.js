import { NextResponse } from "next/server";
import Blog from "../../../models/Blogsmodel";
import { connectdb } from "../../../dbconfig/dbconfig";

connectdb();

export async function GET(request) {
  try {
    const blogs = await Blog.find();
    if (!blogs) {
      return NextResponse.json({ message: "Not found" }, { status: 404 });
    }
    return NextResponse.json({
      blogs: blogs,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { title, caption, body, author, image_url, type } = reqBody;
    if (!title || !caption || !body || !author || !image_url || !type) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }
    const blog = new Blog({
      title,
      type,
      caption,
      body,
      author,
      image_url,
    });
    await blog.save();
    return NextResponse.json({
      message: "Blog created",
      success: true,
      blog,
    });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
