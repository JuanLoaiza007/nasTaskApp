import MiniCard from "@/app/components/MiniCard";
import axios from "axios";

async function getProyectos(proyecto_id) {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/tareas/proyecto/${proyecto_id}`
  );
  return data;
}

export default async function TareasPorProyecto({ params }) {
  const { id } = params;
  const tareas = await getProyectos(id);
  return (
    <div>
      <div className="text-4xl font-bold text-center">
        Tareas del proyecto {id}
      </div>
      <div className="">
        {tareas.map((tarea) => (
          <MiniCard key={tarea.id} data={tarea} type="tarea" />
        ))}
      </div>
    </div>
  );
}
