"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";
import { FaCaretDown } from "react-icons/fa";

// Define types for the data
interface SupplierRecord {
  month: string;
  bags: number;
}

interface LineChartComponentProps {
  data: {
    supplier_records: SupplierRecord[];
    customer_records: { bags: number }[];
  };
}

const LineChartComponent: React.FC<LineChartComponentProps> = ({ data }) => {
  if (!data || !Array.isArray(data.supplier_records) || data.supplier_records.length === 0) {
    return <p>Loading...</p>;
  }

  const supplierData = data.supplier_records || [];
  const customerData = data.customer_records || [];

  const lineData = supplierData.map((item: SupplierRecord, index: number) => ({
    name: item?.month?.substring(0, 3) || "", // Extracting the first 3 letters of month
    supplier: item?.bags || 0, // Default to 0 if no bags
    customer: customerData[index]?.bags || 0, // Default to 0 if no bags
  }));

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex ml-8 items-center gap-2">
          <h3 className="text-lg font-semibold">Bags</h3>
          <div className="h-4 w-px bg-gray-300"></div>
          <div className="border rounded px-3 py-1 text-sm text-gray-600 flex items-center">
            month <FaCaretDown className="ml-1 text-gray-600" />
          </div>
        </div>
      </div>

      {lineData.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={lineData}
            margin={{ top: 5, right: 30, left: 20, bottom: 30 }}
          >
            <Area
              type="monotone"
              dataKey="supplier"
              stroke="none"
              fill="rgba(173, 216, 230, 0.2)"
              isAnimationActive={false}
            />
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#f0f0f0"
              vertical={false}
              horizontal={true}
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#666", fontSize: 12 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#666", fontSize: 12 }}
              tickFormatter={(value) => `${value / 1000}K`}
              dx={-10}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #f0f0f0",
                borderRadius: "8px",
                padding: "8px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
              cursor={{ stroke: "#f0f0f0" }}
            />
            <Line
              type="monotone"
              dataKey="supplier"
              stroke="#1f2937"
              strokeWidth={0.7}
              dot={false}
              name="Supplier Records"
              activeDot={{ r: 4, fill: "#1f2937" }}
            />
            <Line
              type="monotone"
              dataKey="customer"
              stroke="#60a5fa"
              strokeWidth={1}
              strokeDasharray="5 5"
              dot={false}
              name="Customer Records"
              activeDot={{ r: 4, fill: "#60a5fa" }}
            />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <p className="text-gray-500 text-center">No data available</p>
      )}

      <div className="flex justify-center gap-4 mt-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-gray-800"></div>
          <span>Supplier Records</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#60a5fa]"></div>
          <span>Customer Records</span>
        </div>
      </div>
    </div>
  );
};

export default LineChartComponent;
