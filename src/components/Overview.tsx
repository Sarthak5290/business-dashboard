"use client";

import { useState, useEffect } from "react";
import LineChartComponent from "./LineChartComponent";
import PieChartComponent from "./PieChartComponent";
import { SupplierTable } from "./SuplierTable";
import Cards from "./Cards";

// Component
export const Overview = () => {
  const [data, setData] = useState<any>(null); // Temporarily using `any`
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/dashboard/05-01-2025"); // Adjust the date as needed or make it dynamic
        if (!response.ok) {
          throw new Error("Failed to fetch data from MongoDB");
        }

        const result = await response.json();
        if (result.success) {
          setData(result.data);
        } else {
          console.error(result.error);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data found</div>;
  }

  return (
    <div>
      {/* Overview Section */}
      <Cards currentData={data} /> {/* Pass data to Cards as currentData */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="col-span-1 md:col-span-2">
          <LineChartComponent data={data} /> {/* Pass entire data */}
        </div>
        <div className="col-span-1">
          <PieChartComponent topSellingProducts={data.top_selling_products} />
        </div>
      </div>
      {/* Supplier Table Section */}
      <div className="mt-6">
        <SupplierTable supplierData={data.supplier_payments} />
      </div>
    </div>
  );
};
