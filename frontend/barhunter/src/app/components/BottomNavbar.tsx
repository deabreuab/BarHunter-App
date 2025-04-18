import React from "react";
import { IoChatbubbleOutline } from "react-icons/io5";
import { LuCalendar } from "react-icons/lu";
import { MdHome } from "react-icons/md";

function BottomNavbar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-customcolors-darkblue border-t border-gray-800 p-4 z-10">
      <div className="flex justify-around">
        <div className="flex flex-col items-center cursor-pointer hover:text-customcolors-brightblue">
          <LuCalendar className="w-6 h-6" />
          <span className="text-xs mt-1">Calendario</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer hover:text-customcolors-brightblue text-customcolors-brightblue">
          <MdHome className="w-6 h-6" />
          <span className="text-xs mt-1">Inicio</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer hover:text-customcolors-brightblue">
          <IoChatbubbleOutline className="w-6 h-6" />
          <span className="text-xs mt-1">Chat</span>
        </div>
      </div>
    </div>
  );
}

export default BottomNavbar;
