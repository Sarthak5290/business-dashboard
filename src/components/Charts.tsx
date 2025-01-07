import LineChartComponent from "./LineChartComponent";
import PieChartComponent from "./PieChartComponent";
import { SupplierTable } from "./SuplierTable";

export const Charts = () => {
  return (
    <div>
      {/* Charts Section */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="col-span-2">
          <LineChartComponent />
        </div>
        <div>
          <PieChartComponent />
        </div>
      </div>

      {/* Supplier Table Section */}
      <div className="mt-6">
        <SupplierTable />
      </div>
    </div>
  );
};
