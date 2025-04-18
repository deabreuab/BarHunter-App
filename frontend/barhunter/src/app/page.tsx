"use client";

import { BottomNavbar, Header, Sidebar } from "./components";

export default function Home() {
  return (
    <div className="min-h-screen bg-customcolors-darkblue text-white">
      <Header />
      {/* Version web */}
      <div className="container mx-auto px-4 py-6">
        <Sidebar />
        <BottomNavbar />
      </div>
    </div>
  );
}
