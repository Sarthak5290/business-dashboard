"use client";
import { FC } from "react";
import Image from "next/image";
import uparrow from "../icons/arrow/uparrow.png";
import downarrow from "../icons/arrow/downarrow.png";

// Helper function to format numbers
const formatValue = (value: string | undefined) => {
  if (!value) return "0"; // Return "0" if value is undefined or null
  return value.split(".")[0];
};

interface CardsProps {
  currentData: {
    total_sales: string;
    total_expenses: string;
    net_profit: string;
    due_amount: string;
    payment_received: string;
  };
}

const Cards: FC<CardsProps> = ({ currentData }) => {
  const metrics = [
    {
      title: "Total Sales",
      value: formatValue(currentData.total_sales),
      change: "+11.02%",
      isPositive: true,
    },
    {
      title: "Total Expenses",
      value: formatValue(currentData.total_expenses),
      change: "-0.03%",
      isPositive: false,
    },
    {
      title: "Net Profit",
      value: formatValue(currentData.net_profit),
      change: "+15.03%",
      isPositive: true,
    },
    {
      title: "Due Amount",
      value: formatValue(currentData.due_amount),
      change: "+6.08%",
      isPositive: false,
    },
    {
      title: "Payment Received",
      value: formatValue(currentData.payment_received),
      change: "+15.03%",
      isPositive: true,
    },
  ];

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

export default Cards;
