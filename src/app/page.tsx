import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import  Overview  from "@/components/Overview";

const Index = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Sidebar */}
      <div className="hidden sm:block lg:w-64 sticky top-0 z-10 bg-white">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="container mx-auto">
            {/* Content */}
            <Overview />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
