"use client";

import { useEffect, useState } from "react";
import LineChartComponent from "./LineChartComponent";
import PieChartComponent from "./PieChartComponent";
import SupplierTable from "./SuplierTable"; // Corrected spelling

const Charts = () => {
  const [dashboardData, setDashboardData] = useState(null);

  // Fetch data once on mount
  useEffect(() => {
    // In a real app, fetch data from an API
    fetch("/src/data/dashboard.json")
      .then((response) => response.json())
      .then((data) => setDashboardData(data))
      .catch((error) => console.error("Error fetching dashboard data:", error));
  }, []);
  console.log(dashboardData);

  if (!dashboardData) return <div>Loading...</div>;

  return (
    <div>
      {/* Charts Section */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="col-span-2">
          <LineChartComponent dashboardData={dashboardData} />
        </div>
        <div>
          <PieChartComponent dashboardData={dashboardData} />
        </div>
      </div>

      {/* Supplier Table Section */}
      <div className="mt-6">
        <SupplierTable dashboardData={dashboardData} />
      </div>
    </div>
  );
};

export default Charts;
