"use client";

import { useEffect } from "react";

import StoreProvider from "@/app/redux";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

import { useAppDispatch, useAppSelector } from "@/app/redux";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  const isSidebarOpen = useAppSelector((state) => state.global.isSidebarOpen);
  const isDarkModeActive = useAppSelector((state) => state.global.isDarkModeActive);

  useEffect(() => {
    if (isDarkModeActive) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <main className={`flex w-full flex-col ${isSidebarOpen && "md:pl-64"}`}>
        <Navbar />
        {children}
      </main>
    </div>
  );
};

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <DashboardWrapper>{children}</DashboardWrapper>
    </StoreProvider>
  );
};

export default DashboardLayout;
