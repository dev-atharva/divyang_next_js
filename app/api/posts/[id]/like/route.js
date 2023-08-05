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
    post.likes.push(user_id);
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
