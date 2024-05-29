import MiniCardTarea from "./MiniCardTarea";
import axios from "axios";

async function getProyectos() {
  const { data } = await axios.get("http://localhost:3000/api/tareas");
  return data;
}

export default async function TareasPage() {
  const tareas = await getProyectos();

  return (
    <>
      <div className="text-4xl font-bold text-center">Tareas</div>
      <div className="">
        {tareas.map((tarea) => (
          <MiniCardTarea key={tarea.id} tarea={tarea} />
        ))}
      </div>
    </>
  );
}