import { useEffect } from "react";
import MetricsCards from "./sections/MetricsCards";
import ChartsGrid from "./sections/ChartsGrid";
import RecentActivities from "./sections/RecentActivities";

export default function Dashboard() {
  useEffect(() => {
    document.title = "Dashboard | Meredith";
  }, []);

  return (
    <>
      <MetricsCards />
      <ChartsGrid />
      <RecentActivities />
    </>
  );
}
