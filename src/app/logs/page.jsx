import MiniCardLogs from "./MiniCardLogs";
import axios from "axios";

async function getLogs() {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/logs`
  );
  return data;
}

export default async function LogsPage() {
  const logs = await getLogs();

  return (
    <>
      <div className="text-4xl font-bold text-center">Logs</div>
      <div className="">
        {logs.map((log) => (
          <MiniCardLogs key={log.id} log={log} />
        ))}
      </div>
    </>
  );
}
