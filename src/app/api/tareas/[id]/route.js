import { NextResponse } from "next/server";
import { conn } from "@/app/libs/postgres";

export async function GET(request, { params }) {
  try {
    await conn.connect();
    const result = await conn.query(`SELECT * FROM tarea WHERE id = $1`, [
      params.id,
    ]);
    await conn.clean();

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    return NextResponse.json(
      { message: "Producto no encontrado" },
      { status: 404 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    const data = await request.json();

    if (!data || Object.keys(data).length === 0) {
      return NextResponse.json(
        { message: "No hay datos para actualizar" },
        { status: 400 }
      );
    }

    const setClause = Object.keys(data)
      .map((key, index) => `${key} = $${index + 1}`)
      .join(", ");
    const values = Object.values(data);

    values.push(params.id);

    const query = `UPDATE tarea SET ${setClause} WHERE id = $${values.length}`;
    const result = await conn.query(query, values);

    if (result.rowCount === 0) {
      return NextResponse.json(
        { message: "No se ha actualizado el producto" },
        { status: 404 }
      );
    }

    return NextResponse.json({ update: data });
  } catch (error) {
    return NextResponse.json(
      { message: "Error actualizando el producto" },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    await conn.connect();
    const result = await conn.query(`DELETE FROM tarea WHERE id = $1`, [
      params.id,
    ]);
    await conn.clean();

    return NextResponse.json({ message: "Tarea borrada" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
