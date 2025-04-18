"use client";

import { BottomNavbar, Header, Sidebar } from "./components";

export default function Home() {
  return (
    // <div className="min-h-screen bg-customcolors-darkblue text-white">
    //   <Header />
    //   {/* Version web */}
    //   <div className="container mx-auto px-4 py-6">
    //     <Sidebar />
    //     {/* main content */}
    //     <BottomNavbar />
    //   </div>
    // </div>
    <div>
      <h1 className="text-3xl font-bold text-white mb-6">Todas las opciones</h1>
      <h1 className="text-3xl font-bold text-white mb-6">Opciones en California</h1>
    </div>
  );
}
