import MiniCardProyecto from "./MiniCardProyecto";
import axios from "axios";

async function getProyectos() {
  const { data } = await axios.get("http://localhost:3000/api/proyectos");
  return data;
}

export default async function ProyectosPage() {
  const proyectos = await getProyectos();

  return (
    <>
      <div className="text-4xl font-bold text-center">Proyectos</div>
      <div className="">
        {proyectos.map((proyecto) => (
          <MiniCardProyecto key={proyecto.id} proyecto={proyecto} />
        ))}
      </div>
    </>
  );
}
