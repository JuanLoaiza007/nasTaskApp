import { NextResponse } from "next/server";
import { conn } from "@/app/libs/postgres";

// GET all tareas
export async function GET(request) {
  try {
    const result = await conn`SELECT * FROM tarea`;
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

// POST a new tarea
export async function POST(request) {
  try {
    const { proyecto_id, nombre, descripcion, fecha_terminacion } =
      await request.json();

    const tarea = {};

    if (proyecto_id) tarea.proyecto_id = proyecto_id;
    if (nombre) tarea.nombre = nombre;
    if (descripcion) tarea.descripcion = descripcion;
    if (fecha_terminacion) tarea.fecha_terminacion = fecha_terminacion;

    await conn`
      INSERT INTO tarea
      ${conn(tarea)}`;

    return NextResponse.json({
      message: "Tarea creada",
    });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
