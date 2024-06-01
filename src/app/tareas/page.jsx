import MiniCardTarea from "./MiniCardTarea";
import axios from "axios";

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
      <div className="">
        {tareas.map((tarea) => (
          <MiniCardTarea key={tarea.id} tarea={tarea} />
        ))}
      </div>
    </>
  );
}
