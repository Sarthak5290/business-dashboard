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

export async function GET(
  request: NextRequest,
  { params }: { params: { date: string } }
) {
  try {
    // Validate date parameter
    if (!params.date) {
      return NextResponse.json(
        { error: "Date parameter is required" },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    const { db } = await connectToDatabase();
    const collection = db.collection("dashboard_data");

    // Fetch data for the specified date
    const data = await collection.findOne({ date: params.date });

    // Check if data exists
    if (!data) {
      return NextResponse.json(
        { error: "No data found for the specified date" },
        { status: 404 }
      );
    }

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
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Optional: Add POST method to create/update dashboard data
export async function POST(
  request: NextRequest,
  { params }: { params: { date: string } }
) {
  try {
    const body = await request.json();

    // Validate request body
    if (!body) {
      return NextResponse.json(
        { error: "Request body is required" },
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();
    const collection = db.collection("dashboard_data");

    // Update or insert data
    const result = await collection.updateOne(
      { date: params.date },
      { $set: body },
      { upsert: true }
    );

    return NextResponse.json(
      { success: true, message: "Data updated successfully", result },
      { status: 200 }
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
