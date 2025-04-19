'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import { BottomNavbar, Header, Sidebar } from "../components";
import withAuth from "../utils/withAuth";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-customcolors-darkblue text-white">
      <Header />
      <div className="m-0 p-0 md:mx-auto md:px-4 md:container md:py-6 flex">
        <Sidebar />
        <main className="flex-1 p-0 mb-[80px] md:mb-0 md:p-5 overflow-x-hidden">
          {children}
        </main>
        <BottomNavbar />
      </div>
    </div>
  );
}

export default withAuth(MainLayout as React.ComponentType<any>);
