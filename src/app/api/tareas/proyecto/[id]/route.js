import { NextResponse } from "next/server";
import { conn } from "@/app/libs/postgres";

// GET all tareas by proyecto id
export async function GET(request, { params }) {
  try {
    const result = await conn`
      SELECT * FROM tarea
      WHERE proyecto_id = ${params.id}
    `;
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
