"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation"; // Import useParams from next/navigation
import { Loader2 } from "lucide-react"; // Import Loader2 from lucide-react
import LineChartComponent from "@/components/LineChartComponent";
import PieChartComponent from "@/components/PieChartComponent";
import { SupplierTable } from "@/components/SuplierTable";
import Cards from "@/components/Cards";

const DynamicDashboard = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { date } = useParams(); // Use useParams to extract the 'date' from the URL
  console.log(date);

  // Ensure 'date' is treated as a string and not an array
  const dateString = Array.isArray(date) ? date[0] : date;

  useEffect(() => {
    if (dateString) {
      fetchData(dateString); // Fetch data when 'date' is available
    } else {
      setError("No date parameter provided.");
    }
  }, [dateString]); // Trigger when 'date' changes

  const fetchData = async (dateParam: string) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch(`/api/dashboard/${dateParam}`);
      if (!response.ok) throw new Error("Failed to fetch data");

      const result = await response.json();
      if (result.success) {
        setData(result.data);
      } else {
        throw new Error(result.error || "No data returned");
      }
    } catch (error) {
      setError("Error: " + error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="animate-spin text-blue-500" size={40} />
      </div>
    );

  if (error) return <div className="text-center text-red-500">{error}</div>;
  if (!data) return <div className="text-center text-gray-500">No data found</div>;

  return (
    <div className="p-4 md:p-6">
      {/* Cards Section */}
      <Cards currentData={data} />

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {/* Line Chart */}
        <div className="col-span-1 md:col-span-2">
          <LineChartComponent data={data} />
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

export default DynamicDashboard;
