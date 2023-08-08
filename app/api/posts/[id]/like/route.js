import { NextResponse } from "next/server";
import { connectdb } from "../../../../../dbconfig/dbconfig";
import { getDataFromToken } from "../../../../../helpers/getDataFromTokens";
import Post from "../../../../../models/Postmodel";

connectdb();

export async function POST(request, { params: { id } }) {
  try {
    const user_id = getDataFromToken(request);
    if (!user_id) {
      return NextResponse.json({ message: "Not authorized" }, { status: 400 });
    }
    const post = await Post.findById(id);
    if (!post) {
      return NextResponse.json({ message: "Not found" }, { status: 400 });
    }
    const userindexindislikes = post.dislikes.indexOf(user_id);
    if (userindexindislikes !== -1) {
      post.dislikes.splice(userindexindislikes, 1);
    }
    if (!post.likes.includes(user_id)) {
      post.likes.push(user_id);
    } else {
      return NextResponse.json({
        message: "Liked",
        success: true,
      });
    }
    await post.save();
    return NextResponse.json({
      message: "Liked",
      success: true,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function GET(request, { params: { id } }) {
  try {
    const user_id = getDataFromToken(request);
    if (!user_id) {
      return NextResponse.json({ message: "Not authorized" }, { status: 400 });
    }
    const post = await Post.findById(id);
    if (!post) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }
    const hasliked = post.likes.includes(user_id);
    return NextResponse.json({ hasliked });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" });
  }
}
