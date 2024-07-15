import connectMongoDB from "@/libs/mongodb";
import ErqresearchQAns from "@/models/erqresearchQAns";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { category, number, fbtool, questionAnswer } = await request.json();
  await connectMongoDB();
  await ErqresearchQAns.create({ category, number, fbtool, questionAnswer });
  return NextResponse.json({ message: "Answers Submitted" }, { status: 201 });
}