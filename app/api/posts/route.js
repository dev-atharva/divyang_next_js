import { NextResponse } from "next/server";
import { connectdb } from "../../../dbconfig/dbconfig";
import Post from "../../../models/Postmodel";
import { getDataFromToken } from "../../../helpers/getDataFromTokens";

connectdb();

export async function GET(request) {
  try {
    const { type } = request.query;
    if (type) {
      const posts = await Post.find({ type: { $regex: type, $options: "i" } })
        .populate("user comments.user", "name")
        .sort({ createdAt: -1 });
      return NextResponse.json({
        posts: posts,
      });
    }
    const posts = await Post.find().populate("user comments.user", "name");
    if (!posts) {
      return NextResponse.json({ message: "Not found" }, { status: 404 });
    }
    return NextResponse.json({
      posts: posts,
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
    const user_id = getDataFromToken(request);
    if (!user_id) {
      return NextResponse.json({ message: "Not authorized" }, { status: 401 });
    }
    const reqbody = await request.json();
    const { type,content, imageUrl } = reqbody;
    if (!content || !imageUrl) {
      return NextResponse.json(
        { message: "All field required" },
        { status: 400 }
      );
    }
    const newPost = new Post({
      user: user_id,
      type,
      content,
      imageUrl,
    });
    await newPost.save();
    return NextResponse.json({
      message: "Post created",
      success: true,
      newPost,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
