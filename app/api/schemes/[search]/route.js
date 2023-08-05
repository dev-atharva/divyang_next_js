import { connectdb } from "../../../../dbconfig/dbconfig";
import Scheme from "../../../../models/Schemesmodel";
import { NextResponse } from "next/server";

connectdb();

export async function GET({ params: { search } }) {
  try {
    const scheme = await Scheme.find({
      $or: [
        { name: { $regex: search, $options: "i" } },
        { beneficiary: { $elemMatch: { $regex: search, $options: "i" } } },
        { funding: { $regex: search, $options: "i" } },
        { type: { $regex: search, $options: "i" } },
      ],
    });
    if (!scheme) {
      return NextResponse.json({ message: "Not found" }, { status: 404 });
    }
    return NextResponse.json({
      schemes: scheme,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
