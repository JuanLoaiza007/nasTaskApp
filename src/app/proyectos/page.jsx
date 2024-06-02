import MiniCard from "@/app/components/MiniCard";
import axios from "axios";

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
      <div className="">
        {proyectos.map((proyecto) => (
          <MiniCard key={proyecto.id} data={proyecto} type="proyecto" />
        ))}
      </div>
    </>
  );
}
