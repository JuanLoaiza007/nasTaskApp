import MiniCard from "../components/MiniCard";
import axios from "axios";

async function getLogs() {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/logs`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default async function LogsPage() {
  const logs = await getLogs();

  return (
    <>
      <div className="">
        {logs.map((log) => (
          <MiniCard key={log.id} data={log} type="log" />
        ))}
      </div>
    </>
  );
}
