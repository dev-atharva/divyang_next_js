import { NextRequest, NextResponse } from "next/server";
import { connectdb } from "../../../dbconfig/dbconfig";
import Post from "../../../models/Postmodel";
import User from "../../../models/Usermodel";
import { getDataFromToken } from "../../../helpers/getDataFromTokens";

connectdb();

export async function GET(request: NextRequest) {
  try {
    const type = request.nextUrl.searchParams.get("type");
    const user = User;
    if (type !== null) {
      const posts = await Post.find({
        type: { $regex: type, $options: "i" },
      })
        .populate("user comments.user", "name")
        .sort({ createdAt: -1 });

      if (!posts) {
        return NextResponse.json({ message: "Not found" }, { status: 404 });
      }
      return NextResponse.json({
        posts: posts,
        type: type,
      });
    }
    const posts = await Post.find()
      .populate("user comments.user", "name")
      .populate("comments");
    if (!posts) {
      return NextResponse.json({ message: "Not found" }, { status: 404 });
    }
    return NextResponse.json({
      posts: posts,
      type: type,
    });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const user_id = getDataFromToken(request);
    if (!user_id) {
      return NextResponse.json({ message: "Not authorized" }, { status: 401 });
    }
    const reqbody = await request.json();
    const { type, content, imageUrl } = reqbody;
    if (!content || !imageUrl) {
      return NextResponse.json(
        { message: "All fields required" },
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
  } catch (error: any) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
