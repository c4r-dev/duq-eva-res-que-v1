import connectMongoDB from "@/libs/mongodb";
import ErqresearchQAns from "@/models/erqresearchQAns";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { category, number, fbtool, questionAnswer } = await request.json();
  await connectMongoDB();
  await ErqresearchQAns.create({ category, number, fbtool, questionAnswer });
  return NextResponse.json({ message: "Answers Submitted" }, { status: 201 });
}

export async function GET() {
  try {
  await connectMongoDB();
  const erqresearchQAns = await ErqresearchQAns.find();
  return NextResponse.json(erqresearchQAns);
  } catch (error) {
    return NextResponse.json({ message: "No Answers Read"});
  }
}