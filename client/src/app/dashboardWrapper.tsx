import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <main className="flex w-full flex-col md:pl-64">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardWrapper;
