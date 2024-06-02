import { NextResponse } from "next/server";
import { conn } from "@/app/libs/postgres";

// GET all proyecto
export async function GET(request) {
  try {
    const result = await conn`SELECT * FROM proyecto`;
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

// POST create new proyecto
export async function POST(request) {
  try {
    const { proyecto_id, nombre, descripcion, fecha_terminacion } =
      await request.json();

    const proyecto = {};

    if (nombre) proyecto.nombre = nombre;
    if (descripcion) proyecto.descripcion = descripcion;
    if (fecha_terminacion) proyecto.fecha_terminacion = fecha_terminacion;

    await conn`
      INSERT INTO proyecto
      ${conn(proyecto)}`;

    return NextResponse.json({
      message: "Proyecto creado",
    });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
