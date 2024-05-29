export default function MiniCardLogs({ log }) {
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
      <div className="flex flex-col space-y-2 p-4 rounded-lg bg-blue-100 my-4">
        <div className="flex justify-between w-full p-2">
          <div className="px-2">
            <p className="text-xl font-bold my-2">Operacion: {log.operacion}</p>
            <p>
              <strong className="text-lg">Detalles:</strong> {log.detalles}{" "}
            </p>
          </div>

          <div className="text-slate-600 my-auto px-2">
            <div>
              <p className="text-sm"> Fecha: </p>
              <p className="text-md font-medium">{formatDate(log.timestamp)}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}