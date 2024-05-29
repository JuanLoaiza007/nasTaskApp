export default function MiniCardProyecto({ proyecto }) {
  const formatDate = (dateString) => {
    if (!dateString) return "Fecha no disponible";

    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "Fecha inválida";

    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Intl.DateTimeFormat("es-ES", options).format(date);
  };

  return (
    <>
      <div className="flex flex-col space-y-2 p-4 rounded-lg bg-blue-100 my-4 hover:bg-blue-400 hover:text-white hover:cursor-pointer">
        <div className="flex justify-between w-full p-2">
          <div className="text-lg font-bold my-auto px-2">
            {proyecto.nombre}
          </div>
          <div className="text-sm font-medium text-slate-600 px-2">
            Termina el:{" "}
            <strong>
              <p>{formatDate(proyecto.fecha_terminacion)}</p>
            </strong>
          </div>
        </div>
      </div>
    </>
  );
}
