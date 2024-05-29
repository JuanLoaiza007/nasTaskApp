import MiniCardTarea from "./MiniCardTarea";
import axios from "axios";
import BotonAddTarea from "@/app/tareas/BotonAddTarea";

async function getTareas() {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/tareas`
  );
  return data;
}

export default async function TareasPage() {
  const tareas = await getTareas();

  return (
    <>
      <div className="text-4xl font-bold text-center">
        Tareas
        <BotonAddTarea />
      </div>
      <div className="">
        {tareas.map((tarea) => (
          <MiniCardTarea key={tarea.id} tarea={tarea} />
        ))}
      </div>
    </>
  );
}
