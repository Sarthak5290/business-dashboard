// src/types/dashboard.ts

export interface TopSellingProduct {
  item: string;
  weight: number;
}

export interface SupplierPayment {
  record_no: string;
  farmer_name: string;
  net_amount: number;  // Changed to number to match SupplierTable
  paid_amount: number; // Changed to number to match SupplierTable
  due_amount: number;
  payment_status: "Paid" | "Pending"; // Made more specific to match SupplierTable
}

export interface SupplierRecord {
  month: string;
  bags: number;
}

export interface CustomerRecord {
  month: string;
  bags: number;
}

export interface DashboardData {
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

export interface ApiResponse {
  success: boolean;
  data: DashboardData;
  error?: string;
}