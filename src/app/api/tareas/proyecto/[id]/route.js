import { NextResponse } from "next/server";
import { conn } from "@/app/libs/postgres";

// GET all tareas
export async function GET(request, { params }) {
  try {
    await conn.connect();
    const result = await conn.query(
      "SELECT * FROM tarea WHERE proyecto_id = $1",
      [params.id]
    );
    await conn.clean();
    return NextResponse.json(result.rows);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
