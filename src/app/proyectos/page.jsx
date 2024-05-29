import MiniCardProyecto from "./MiniCardProyecto";
import axios from "axios";
import BotonAddProyecto from "@/app/proyectos/BotonAddProyecto";

async function getProyectos() {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/proyectos`
  );
  return data;
}

export default async function ProyectosPage() {
  const proyectos = await getProyectos();

  return (
    <>
      <div className="text-4xl font-bold text-center">
        Proyectos
        <BotonAddProyecto />
      </div>
      <div className="">
        {proyectos.map((proyecto) => (
          <MiniCardProyecto key={proyecto.id} proyecto={proyecto} />
        ))}
      </div>
    </>
  );
}
