import User from "../../../../models/Usermodel";
import bcryptjs from "bcryptjs";
import { connectdb } from "../../../../dbconfig/dbconfig";
import { NextResponse } from "next/server";

connectdb();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { name, email, password } = reqBody;
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const salt = await bcryptjs.genSalt(10);
    const hasedpassword = await bcryptjs.hash(password, salt);
    const newuser = new User({
      name,
      email,
      password: hasedpassword,
    });
    const saveduser = await newuser.save();
    // console.log(saveduser);

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      saveduser,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
