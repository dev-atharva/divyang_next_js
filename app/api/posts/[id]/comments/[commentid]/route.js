import { NextResponse } from "next/server";
import { connectdb } from "../../../../../../dbconfig/dbconfig";
import { getDataFromToken } from "../../../../../../helpers/getDataFromTokens";
import Post from "../../../../../../models/Postmodel";

connectdb();

export async function POST(request, { params: { id, commentid } }) {
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
    const comment = post.comments.id(commentid);
    if (!comment) {
      return NextResponse.json(
        { message: "Comment not found" },
        { status: 404 }
      );
    }
    const newReply = { user_id, content };
    comment.replies.push(newReply);
    await post.save();
    return NextResponse.json({
      message: "Replied",
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
