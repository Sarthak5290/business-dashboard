import { useState, useEffect, useCallback } from "react";
import { toast } from "@/components/ui/use-toast";

interface DashboardData {
  date: string;
  total_sales: string;
  total_expenses: string;
  net_profit: string;
  due_amount: string;
  payment_received: string;
  supplier_records: Array<{ month: string; bags: number }>;
  customer_records: Array<{ month: string; bags: number }>;
  top_selling_products: Array<{ item: string; weight: number }>;
  supplier_payments: Array<{
    record_no: number;
    farmer_name: string;
    net_amount: string;
    paid_amount: string;
    due_amount: number;
    payment_status: string;
  }> ;
}

interface UseDashboardDataReturn {
  data: DashboardData | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

export function useDashboardData(date: string): UseDashboardDataReturn {
  const [data, setData] = useState<DashboardData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  // Define fetchData using useCallback to avoid unnecessary re-creation
  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(`/api/dashboard/${date}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        setData(result.data);
        toast({
          title: "Data Loaded Successfully",
          description: `Dashboard data for ${date} fetched successfully.`,
        });
      } else {
        throw new Error(result.error || "Failed to fetch dashboard data");
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An error occurred";
      setError(new Error(errorMessage));
      toast({
        variant: "destructive",
        title: "Error",
        description: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  }, [date]); // Add date as dependency to re-fetch if date changes

  useEffect(() => {
    fetchData();
  }, [fetchData]); // Now it's safe to include fetchData in the dependency array

  return { data, isLoading, error, refetch: fetchData };
}
