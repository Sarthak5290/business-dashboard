import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { OverviewCards } from "@/components/OverviewCards";
import Charts from "@/components/Charts";

const Index = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Sticky Sidebar */}
      <div className="sticky top-0 z-10">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header directly above the content */}
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="container mx-auto">
            {/* Content */}
            <OverviewCards />
            <Charts />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
