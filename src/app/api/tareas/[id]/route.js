import { NextResponse } from "next/server";
import { conn } from "@/app/libs/postgres";

// GET a tarea with id
export async function GET(request, { params }) {
  try {
    const result = await conn`SELECT * FROM tarea WHERE id = ${params.id}`;
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}

// PUT update a tarea with id
export async function PUT(request, { params }) {
  try {
    const { proyecto_id, nombre, descripcion, fecha_terminacion } =
      await request.json();

    const tarea = {};

    if (proyecto_id) tarea.proyecto_id = proyecto_id;
    if (nombre) tarea.nombre = nombre;
    if (descripcion) tarea.descripcion = descripcion;
    if (fecha_terminacion) tarea.fecha_terminacion = fecha_terminacion;

    const columnsToUpdate = Object.keys(tarea);

    await conn`
      UPDATE tarea
      SET ${conn(tarea, columnsToUpdate)}
      WHERE id = ${params.id};
    `;

    return NextResponse.json({ message: "Tarea actualizada" });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}

// DELETE delete a tarea with id
export async function DELETE(request, { params }) {
  try {
    await conn`DELETE FROM tarea WHERE id = ${params.id}`;
    return NextResponse.json({ message: "Tarea eliminada" });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
