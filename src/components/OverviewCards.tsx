"use client";
import dashboardData from "../data/dashboard.json";
import Image from "next/image"; // Import Image component from next/image

import uparrow from "../icons/arrow/uparrow.png";
import downarrow from "../icons/arrow/downarrow.png";

// Helper function to format numbers
const formatValue = (value: string) => {
  return value.split(".")[0];
};

const data = dashboardData[0];

const metrics = [
  {
    title: "Total Sales",
    value: formatValue(data.total_sales),
    change: "+11.02%",
    isPositive: true,
  },
  {
    title: "Total Expenses",
    value: formatValue(data.total_expenses),
    change: "-0.03%",
    isPositive: false,
  },
  {
    title: "Net Profit",
    value: formatValue(data.net_profit),
    change: "+15.03%",
    isPositive: true,
  },
  {
    title: "Due Amount",
    value: formatValue(data.due_amount),
    change: "+6.08%",
    isPositive: false,
  },
  {
    title: "Payment Received",
    value: formatValue(data.payment_received),
    change: "+15.03%",
    isPositive: true,
  },
];

export const OverviewCards = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-700">Overview</h2>
      <div className="grid grid-cols-5 gap-4">
        {metrics.map((metric) => (
          <div
            key={metric.title}
            className={`rounded-lg p-4 shadow-sm ${
              metric.title === "Total Sales" ||
              metric.title === "Net Profit" ||
              metric.title === "Payment Received"
                ? "bg-[#D9F2FB]"
                : "bg-[#E2E5EA]"
            }`}
          >
            <h3 className="text-sm text-black mb-2">{metric.title}</h3>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-semibold">{metric.value}</span>
              <div
                className={`flex items-center ${
                  metric.isPositive ? "text-green-500" : "text-red-500"
                }`}
              >
                <span className="text-sm">{metric.change}</span>
                <Image
                  src={metric.isPositive ? uparrow : downarrow}
                  alt="Arrow Icon"
                  width={16}
                  height={16}
                  className={`h-4 w-4 ${
                    metric.isPositive ? "text-green-500" : "text-red-500"
                  }`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
