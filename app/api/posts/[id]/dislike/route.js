import { connectdb } from "../../../../../dbconfig/dbconfig";
import { getDataFromToken } from "../../../../../helpers/getDataFromTokens";
import Post from "../../../../../models/Postmodel";
import { NextResponse } from "next/server";

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
    const userindexinlikes = post.dislikes.indexOf(user_id);
    if (userindexinlikes !== -1) {
      post.likes.splice(userindexinlikes, 1);
    }
    if (!post.dislikes.includes(user_id)) {
      post.dislikes.push(user_id);
    } else {
      return NextResponse.json({
        message: "DisLiked",
        success: true,
      });
    }
    await post.save();
    return NextResponse.json({
      message: "DisLiked",
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
    const hasdisliked = post.dislikes.includes(user_id);
    return NextResponse.json({ hasdisliked });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" });
  }
}
