import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";

// Types for the data structure
interface SupplierRecord {
  month: string;
  bags: number;
}

interface CustomerRecord {
  month: string;
  bags: number;
}

interface TopSellingProduct {
  item: string;
  weight: number;
}

interface SupplierPayment {
  record_no: number;
  farmer_name: string;
  net_amount: string;
  paid_amount: string;
  due_amount: number;
  payment_status: string;
}

interface DashboardData {
  date: string;
  total_sales: string;
  total_expenses: string;
  net_profit: string;
  due_amount: string;
  payment_received: string;
  supplier_records: SupplierRecord[];
  customer_records: CustomerRecord[];
  top_selling_products: TopSellingProduct[];
  supplier_payments: SupplierPayment[];
}

// Define the correct route segment config
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

// Define the params type
interface Params {
  params: { date: string };
}

export async function GET(request: NextRequest, { params }: Params) {
  try {
    // Extract the date parameter
    const { date } = params;

    // Validate the date parameter
    if (!date) {
      console.error("Missing date parameter in request.");
      return NextResponse.json(
        { error: "Date parameter is required" },
        { status: 400 }
      );
    }

    console.log("Received date parameter:", date);

    // Connect to MongoDB
    const { db } = await connectToDatabase();
    if (!db) {
      console.error("Failed to connect to MongoDB.");
      return NextResponse.json(
        { error: "Database connection failed" },
        { status: 500 }
      );
    }

    const collection = db.collection("dashboard_data");

    // Fetch data for the specified date
    const data = await collection.findOne({ date });

    // Check if data exists
    if (!data) {
      console.warn("No data found for the specified date:", date);
      return NextResponse.json(
        { error: "No data found for the specified date" },
        { status: 404 }
      );
    }

    console.log("Data fetched successfully:", data);

    // Cast the data to the correct type
    const dashboardData = data as unknown as DashboardData;

    // Return the dashboard data
    return NextResponse.json(
      { success: true, data: dashboardData },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store, max-age=0",
        },
      }
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: String(error) },
      { status: 500 }
    );
  }
}
