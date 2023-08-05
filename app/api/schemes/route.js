import { connectdb } from "../../.././dbconfig/dbconfig";
import { NextResponse } from "next/server";
import Scheme from "../../../models/Schemesmodel";

connectdb();

export async function GET(request) {
  try {
    const schemes = await Scheme.find();
    if (!schemes) {
      return NextResponse.json({ message: "No scheme found" }, { status: 404 });
    }
    return NextResponse.json({
      schemes: schemes,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const reqbody = await request.json();
    const { name, funding, type, description, eligiblity } = reqbody;
    if (!name || !funding || !type || !description || !eligiblity) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }
    const newScheme = new Scheme({
      name,
      funding,
      type,
      description,
      eligiblity,
    });
    await newScheme.save();
    return NextResponse.json({
      message: "Scheme created",
      success: true,
      newScheme,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}