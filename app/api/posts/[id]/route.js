import { connectdb } from "../../../../dbconfig/dbconfig";
import Post from "../../../../models/Postmodel";
import { NextResponse } from "next/server";

connectdb();

export async function GET(request,{ params: { id } }) {
  try {
    const post = await Post.findById(id).populate("user comments.user", "name");
    if (!post) {
      return NextResponse.json({ message: "Not found" }, { status: 404 });
    }
    return NextResponse.json({ post: post });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
