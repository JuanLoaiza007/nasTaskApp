import MiniCard from "@/app/components/MiniCard";
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
          <MiniCard key={tarea.id} data={tarea} type="tarea" />
        ))}
      </div>
    </>
  );
}
