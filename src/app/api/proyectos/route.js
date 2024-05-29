import { NextResponse } from "next/server";
import { conn } from "@/app/libs/postgres";

// GET all proyecto
export async function GET(request) {
  try {
    await conn.connect();
    const result = await conn.query("SELECT * FROM proyecto");
    await conn.clean();
    return NextResponse.json(result.rows);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

// POST create new proyecto
export async function POST(request) {
  try {
    const data = await request.json();
    const { nombre, descripcion, fecha_terminacion } = data;

    await conn.connect();
    const result = await conn.query(
      "INSERT INTO proyecto (nombre, descripcion, fecha_terminacion) VALUES ($1, $2, $3) RETURNING *",
      [nombre, descripcion, fecha_terminacion]
    );
    await conn.clean();

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
