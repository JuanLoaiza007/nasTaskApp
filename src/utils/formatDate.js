// [formatDate.js]
export const formatDate = (dateString, options = "defaultOptions") => {
  if (!dateString) return "Fecha no disponible";

  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "Fecha inválida";

  if (options === "defaultOptions") {
    options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
  }
  return new Intl.DateTimeFormat("es-ES", options).format(date);
};
