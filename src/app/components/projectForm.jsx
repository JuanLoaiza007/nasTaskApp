// [projectForm.jsx]
"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";
import { SideEditorState } from "@/states/SideEditorState";

export default function ProjectForm({ proyecto }) {
  const router = useRouter();
  const params = useParams();

  const useSideEditorState = SideEditorState();

  const [proyectoData, setProyectoData] = useState({
    nombre: "",
    descripcion: "",
    fecha_terminacion: null,
  });

  useEffect(() => {
    if (proyecto.id) {
      setProyectoData({
        nombre: proyecto.nombre,
        descripcion: proyecto.descripcion,
        fecha_terminacion: proyecto.fecha_terminacion,
      });
    }
  }, [proyecto]);

  const handleChange = (e) => {
    setProyectoData({ ...proyecto, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // No reiniciar la página

    if (proyecto.nombre === "") {
      alert("Por favor escriba un nombre");
      return;
    }

    try {
      if (!proyecto.id) {
        const res = await axios.post("/api/proyectos", proyectoData);
      } else {
        const res = await axios.put(
          `/api/proyectos/${proyecto.id}`,
          proyectoData
        );
      }
    } catch (error) {
      alert("Ha ocurrido un error, porfavor intente de nuevo.");
      console.log(`El error es: ${error}`);
      return;
    }

    useSideEditorState.setIsEditing(false);
    router.push("/proyectos");
    router.refresh();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-full mx-auto p-4 bg-white shadow-md rounded-md"
    >
      <h2 className="text-2xl font-bold mb-4">
        {proyecto.id ? "Editar Proyecto" : "Crear Proyecto"}
      </h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Nombre
        </label>
        <input
          type="text"
          name="nombre"
          value={proyectoData.nombre}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Descripcion
        </label>
        <textarea
          value={proyectoData.descripcion}
          name="descripcion"
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Fecha de Terminación
        </label>
        <input
          type="datetime-local"
          name="fecha_terminacion"
          value={proyectoData.fechaTerminacion}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
        />
      </div>
      <div className="flex flex-row space-x-4">
        <button
          type="submit"
          className="py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700"
        >
          {proyecto.id ? "Actualizar" : "Crear"}
        </button>
        <button
          className="py-2 px-4 bg-red-600 text-white font-semibold rounded-md shadow-md hover:bg-red-700"
          onClick={() => useSideEditorState.setIsEditing(false)}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
