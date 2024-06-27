import { NextResponse } from "next/server";
import { conn } from "@/app/libs/postgres";

// GET all logs
export async function GET(request) {
  try {
    const result = await conn`SELECT * FROM logs`;
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
