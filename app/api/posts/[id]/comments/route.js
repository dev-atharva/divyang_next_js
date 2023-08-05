import { connectdb } from "../../../../../dbconfig/dbconfig";
import Post from "../../../../../models/Postmodel";
import { getDataFromToken } from "../../../../../helpers/getDataFromTokens";
import { NextResponse } from "next/server";

connectdb();

export async function POST(request, { params: { id } }) {
  try {
    const user_id = getDataFromToken(request);
    if (!user_id) {
      return NextResponse.json(
        { message: "Unauthorized user" },
        { status: 400 }
      );
    }
    const reqbody = await request.json();
    const { content } = reqbody;
    const post = await Post.findById(id);
    if (!post) {
      return NextResponse.json({ message: "Not found" }, { status: 404 });
    }
    const newcomment = { user_id, content };
    post.comments.push(newcomment);
    await post.save();
    return NextResponse.json({
      message: "Commented",
      success: true,
      post,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
