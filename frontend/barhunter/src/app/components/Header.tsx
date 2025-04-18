'use client'

import React from "react";
import { FaBell } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoArrowBack, IoPersonSharp } from "react-icons/io5";
import { usePathname, useRouter } from "next/navigation";

function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const showBackButton = pathname !== "/";

  return (
    <header className="bg-customcolors-darkblue/70 border-b border-gray-800 px-4 py-4 sticky top-0 z-10 backdrop-blur-md border-b">
      <div className="md:container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {showBackButton ? (
            <button
              className="text-white hover:text-customcolors-brightblue p-2 rounded-full cursor-pointer md:hidden"
              onClick={() => router.back()}
            >
              <IoArrowBack className="h-6 w-6" />
            </button>
          ) : (
            <button className="text-white hover:text-customcolors-brightblue p-2 rounded-full cursor-pointer md:hidden">
              <GiHamburgerMenu className="h-5 w-5" />
            </button>
          )}
          <div className="text-xl font-bold bg-gradient-to-r from-customcolors-brightblue to-customcolors-brightpink bg-clip-text text-transparent">
            Bar Hunter
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-white hover:text-customcolors-brightblue p-2 rounded-full cursor-pointer">
            <FaBell className="h-5 w-5" />
          </button>
          <button className="text-white hover:text-customcolors-brightblue p-2 rounded-full cursor-pointer">
            <IoPersonSharp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;