import { NextResponse } from "next/server";
import { conn } from "@/app/libs/postgres";

// GET a proyecto with id
export async function GET(request, { params }) {
  try {
    const result = await conn`SELECT * FROM proyecto WHERE id = ${params.id}`;
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

// PUT update a proyecto with id
export async function PUT(request, { params }) {
  try {
    const { nombre, descripcion, fecha_terminacion } = await request.json();

    const proyecto = {};

    if (nombre) proyecto.nombre = nombre;
    if (descripcion) proyecto.descripcion = descripcion;
    if (fecha_terminacion) proyecto.fecha_terminacion = fecha_terminacion;

    const columnsToUpdate = Object.keys(proyecto);

    await conn`
      UPDATE proyecto
      SET ${conn(proyecto, columnsToUpdate)}
      WHERE id = ${params.id};
    `;

    return NextResponse.json({ message: "Proyecto actualizado" });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}

// DELETE delete a proyecto with id
export async function DELETE(request, { params }) {
  try {
    await conn`DELETE FROM proyecto WHERE id = ${params.id}`;
    return NextResponse.json({ message: "Proyecto eliminado" });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
