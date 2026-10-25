import { createFileRoute } from "@tanstack/react-router";
import { ReportView } from "@/components/report-view";
import { getLuxiWeather } from "@/lib/weather.functions";

export const Route = createFileRoute("/")({
  loader: () => getLuxiWeather(),
  component: Home,
});

function Home() {
  const weather = Route.useLoaderData();
  return <ReportView weather={weather} />;
}
