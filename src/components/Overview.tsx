"use client";

import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import LineChartComponent from "./LineChartComponent";
import PieChartComponent from "./PieChartComponent";
import { SupplierTable } from "./SuplierTable";
import Cards from "./Cards";

// interface DashboardData {
//   top_selling_products: string[];
//   supplier_payments: any[]; // You can refine this further based on the actual structure of supplier payments
//   // Add other properties based on the response data
// }

interface SupplierPayment {
  [key: string]: string; // Flexible but still avoids `any[]`
}

interface DashboardData {
  top_selling_products: string[];
  supplier_payments: SupplierPayment[]; // Refined the type
}


export const Overview = () => {
  const [data, setData] = useState<DashboardData | null>(null); // Use the specific type here
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
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px] text-gray-500">
        No data found
      </div>
    );
  }

  return (
    <div>
      {/* Overview Section */}
      <Cards currentData={data} /> {/* Pass data to Cards as currentData */}

      {/* Responsive grid for LineChart and PieChart */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {/* Line Chart */}
        <div className="col-span-1 md:col-span-2">
          <LineChartComponent data={data} /> {/* Pass entire data */}
        </div>
        {/* Pie Chart */}
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
