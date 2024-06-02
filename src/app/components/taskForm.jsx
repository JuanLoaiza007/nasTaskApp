// [taskForm.jsx]
"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { SideEditorState } from "@/states/SideEditorState";

export default function TaskForm({ tarea }) {
  const router = useRouter();

  const useSideEditorState = SideEditorState();

  const [taskData, setTaskData] = useState({
    proyecto_id: "",
    nombre: "",
    descripcion: "",
    fecha_terminacion: null,
  });

  useEffect(() => {
    if (tarea.id) {
      setTaskData({
        proyecto_id: tarea.proyecto_id,
        nombre: tarea.nombre,
        descripcion: tarea.descripcion,
        fecha_terminacion: tarea.fecha_terminacion,
      });
    }
  }, [tarea]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // No reiniciar la página

    if (taskData.nombre === "") {
      alert("Por favor escriba un nombre");
      return;
    }

    try {
      if (!tarea.id) {
        const res = await axios.post("/api/tareas", taskData);
      } else {
        const res = await axios.put(`/api/tareas/${tarea.id}`, taskData);
      }
    } catch (error) {
      alert("Ha ocurrido un error, porfavor intente de nuevo.");
      console.log(`Objeto es: ${taskData}\nId es: ${tarea.id}`);
      console.log(`El error es: ${error}`);
      return;
    }

    useSideEditorState.setIsEditing(false);
    router.push("/tareas");
    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="h-full mx-auto p-4 bg-white titulo rounded-xl">
        <h2 className="text-2xl font-bold mb-4">
          {tarea.id ? "Editar Tarea" : "Crear Tarea"}
        </h2>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md titulo focus:ring focus:ring-opacity-50"
          value={taskData.nombre}
          onChange={(e) => setTaskData({ ...taskData, nombre: e.target.value })}
        />
        <label htmlFor="proyecto_id">Proyecto</label>
        <input
          type="text"
          id="proyecto_id"
          name="proyecto_id"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md titulo focus:ring focus:ring-opacity-50"
          value={taskData.proyecto_id}
          onChange={(e) =>
            setTaskData({ ...taskData, proyecto_id: e.target.value })
          }
        />
        <label htmlFor="descripcion">Descripcion</label>
        <textarea
          id="descripcion"
          name="descripcion"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md titulo focus:ring focus:ring-opacity-50"
          value={taskData.descripcion}
          onChange={(e) =>
            setTaskData({ ...taskData, descripcion: e.target.value })
          }
        />
        <label htmlFor="fecha_terminacion">Fecha de terminación</label>
        <input
          type="date"
          id="fecha_terminacion"
          name="fecha_terminacion"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md titulo focus:ring focus:ring-opacity-50"
          value={taskData.fecha_terminacion}
          onChange={(e) =>
            setTaskData({ ...taskData, fecha_terminacion: e.target.value })
          }
        />
      </div>
      <div className="flex flex-row mx-2 px-2 my-4 justify-between">
        <button
          type="submit"
          className="py-2 px-4 bg-blue-600 text-white font-semibold rounded-md titulo hover:bg-blue-700"
        >
          {tarea.id ? "Actualizar" : "Crear"}
        </button>
        <button
          className="py-2 px-4 bg-red-600 text-white font-semibold rounded-md titulo hover:bg-red-700"
          onClick={() => useSideEditorState.setIsEditing(false)}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
