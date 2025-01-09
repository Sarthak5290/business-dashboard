import mongoose, { Schema, Document } from 'mongoose';

interface ITopSellingProduct {
  name: string;
  sales: number;
}

interface ISupplierPayment {
  name: string;
  amount: number;
  paymentDate: Date;
}

export interface IDashboard extends Document {
  top_selling_products: ITopSellingProduct[];
  supplier_payments: ISupplierPayment[];
  // Add other fields if required
}

const TopSellingProductSchema = new Schema<ITopSellingProduct>({
  name: { type: String, required: true },
  sales: { type: Number, required: true },
});

const SupplierPaymentSchema = new Schema<ISupplierPayment>({
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  paymentDate: { type: Date, required: true },
});

const DashboardSchema = new Schema<IDashboard>({
  top_selling_products: { type: [TopSellingProductSchema], required: true },
  supplier_payments: { type: [SupplierPaymentSchema], required: true },
  // Add other fields if needed
});

export const Dashboard = mongoose.model<IDashboard>('Dashboard', DashboardSchema);

