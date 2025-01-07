// src/lib/db.ts
import { MongoClient, Db } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

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

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDatabase(): Promise<{ client: MongoClient; db: Db }> {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = await MongoClient.connect(process.env.MONGODB_URI as string);
  const db = client.db(process.env.MONGODB_DB);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

export async function fetchDashboardData(date: string): Promise<DashboardData | null> {
  try {
    const { db } = await connectToDatabase();
    const collection = db.collection('dashboard_data');
    
    const data = await collection.findOne({ date }) as DashboardData | null;
    
    if (!data) {
      console.error(`No data found for date: ${date}`);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    throw error;
  }
}

// Usage in your page.tsx:
export async function getDashboardData(date: string) {
  try {
    const data = await fetchDashboardData(date);
    if (!data) {
      throw new Error('Failed to fetch dashboard data');
    }
    return data;
  } catch (error) {
    console.error('Error in getDashboardData:', error);
    throw error;
  }
}