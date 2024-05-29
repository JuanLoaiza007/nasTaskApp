export default function MiniCardTarea({ tarea }) {
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
        <div className="flex justify-between w-full p-2 ">
          <div className="px-2">
            <p className="text-lg font-bold mb-2">{tarea.nombre}</p>
            <p className="text-md">
              <strong>Id proyecto:</strong> {tarea.proyecto_id}
            </p>
          </div>
          <div className="text-sm font-medium text-slate-600 px-2 my-auto">
            Termina el:{" "}
            <strong>
              <p>{formatDate(tarea.fecha_terminacion)}</p>
            </strong>
          </div>
        </div>
      </div>
    </>
  );
}
