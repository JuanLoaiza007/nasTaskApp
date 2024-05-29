import { NextResponse } from "next/server";
import { conn } from "@/app/libs/postgres";

export async function GET(request) {
  try {
    await conn.connect();
    const result = await conn.query("SELECT * FROM logs");
    await conn.clean();

    return NextResponse.json(result.rows);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
