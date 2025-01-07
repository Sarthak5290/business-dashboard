// src/components/PieChartComponent.tsx
"use client"

import { PieChart, Pie, Cell, ResponsiveContainer,  } from "recharts";
import dashboardData from "../data/dashboard.json";

const COLORS = ["#0EA5E9", "#93C5FD", "#BFDBFE", "#DBEAFE"];

const PieChartComponent = () => {
  // Transform data for the chart
  const pieData = dashboardData[0].top_selling_products.map((product) => ({
    name: product.item,
    value: product.weight,
  }));

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold ml-20 mb-6">Top Selling Items</h3>
      <div className="h-[190px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            {/* <Legend /> */}
          </PieChart>
        </ResponsiveContainer>
      </div>
      {/* Data List */}
      <div className="mt-4">
        {pieData.map((entry, index) => (
          <div key={entry.name} className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <div
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <span>{entry.name}</span>
            </div>
            <span>{entry.value} kg</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartComponent;
