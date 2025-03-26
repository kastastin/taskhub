import Navbar from "@/components/Navbar";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full">
      {/* sidebar */}
      sidebar
      <main className="flex w-full flex-col md:pl-64">
        {/* navbar */}
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardWrapper;
