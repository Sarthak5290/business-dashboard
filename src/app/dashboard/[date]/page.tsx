"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import LineChartComponent from "@/components/LineChartComponent";
import PieChartComponent from "@/components/PieChartComponent";
import { SupplierTable } from "@/components/SuplierTable";
import Cards from "@/components/Cards";
import type { DashboardData, ApiResponse } from "@/types/dashboard";

const DynamicDashboard = () => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const params = useParams();

  const dateString = typeof params?.date === 'string'
    ? params.date
    : Array.isArray(params?.date)
    ? params.date[0]
    : null;

  useEffect(() => {
    const fetchDashboardData = async () => {
      if (!dateString) {
        setError("No date parameter provided");
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(`/api/dashboard/${dateString}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result: ApiResponse = await response.json();

        if (result.success && result.data) {
          setData(result.data);
        } else {
          throw new Error(result.error || "No data returned");
        }
      } catch (err) {
        setError(`Error: ${err instanceof Error ? err.message : 'Failed to fetch data'}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, [dateString]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="animate-spin text-blue-500" size={40} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">No data available</p>
      </div>
    );
  }

  return (
    <main className="p-4 md:p-6 max-w-7xl mx-auto">
      <Cards currentData={data} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="col-span-1 md:col-span-2 bg-white rounded-lg shadow-sm p-4">
          <LineChartComponent data={data} />
        </div>

        <div className="col-span-1 bg-white rounded-lg shadow-sm p-4">
          <PieChartComponent topSellingProducts={data.top_selling_products} />
        </div>
      </div>

      <div className="mt-6 bg-white rounded-lg shadow-sm">
        <SupplierTable supplierData={data.supplier_payments} />
      </div>
    </main>
  );
};

export default DynamicDashboard;
