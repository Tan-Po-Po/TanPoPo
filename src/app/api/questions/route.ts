import { NextResponse } from "next/server";
import Question from "@/models/Question";
import dbConnect from "@/config/dbConnect";

export async function POST(req: Request) {
  const { location } = (await req.json()) as {
    location: "courses" | "prices" | "contacts";
  };

  await dbConnect();
  try {
    const questions = await Question.findOne({ location });
    return NextResponse.json(questions);
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
}
