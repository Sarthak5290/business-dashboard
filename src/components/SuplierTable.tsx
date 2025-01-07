"use client"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface SupplierPayment {
  record_no: string;
  farmer_name: string;
  net_amount: number;
  paid_amount: number;
  due_amount: number;
  payment_status: "Paid" | "Pending";
}

interface SupplierTableProps {
  supplierData: SupplierPayment[]; // Define the expected structure of supplierData
}

export const SupplierTable: React.FC<SupplierTableProps> = ({ supplierData }) => {
  return (
    <div className="rounded-lg border mt-6">
      {/* Title */}
      <h2 className="text-xl ml-5 mt-4 font-bold text-black mb-4">Recent Supplier Payments</h2>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Record No</TableHead>
            <TableHead>Farmer Name</TableHead>
            <TableHead>Net Amount</TableHead>
            <TableHead>Paid Amount</TableHead>
            <TableHead>Due Amount</TableHead>
            <TableHead>Payment Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {supplierData.map((row) => (
            <TableRow key={row.record_no}>
              <TableCell>{row.record_no}</TableCell>
              <TableCell>{row.farmer_name}</TableCell>
              <TableCell>{row.net_amount}</TableCell>
              <TableCell>{row.paid_amount}</TableCell>
              <TableCell>{row.due_amount}</TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    row.payment_status === "Paid"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {row.payment_status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
