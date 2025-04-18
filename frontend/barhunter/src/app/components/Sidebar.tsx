import React from "react";
import { IoHeartOutline } from "react-icons/io5";
import { LuCalendar, LuCompass } from "react-icons/lu";
import { MdLogout } from "react-icons/md";
import { PiGear } from "react-icons/pi";
import { RiMap2Line } from "react-icons/ri";

function Sidebar() {
  return (
    <div className="hidden md:flex">
      <div className="w-64 bg-customcolors-darkblue border-r border-gray-800 min-h-[calc(100vh-80px)] pr-6">
        <ul className="flex flex-col space-y-6 py-8">
          <li className="flex items-center space-x-3 text-gray-400 cursor-pointer hover:text-white">
            <LuCompass className="w-5 h-5"/>
            <span>Explorar</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-400 cursor-pointer hover:text-white">
            <RiMap2Line className="w-5 h-5"/>
            <span>Mapa</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-400 cursor-pointer hover:text-white">
            <LuCalendar className="w-5 h-5"/>
            <span>Eventos</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-400 cursor-pointer hover:text-white">
            <IoHeartOutline className="w-5 h-5"/>
            <span>Favoritos</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-400 cursor-pointer hover:text-white">
            <PiGear className="w-5 h-5"/>
            <span>Configuracion</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-400 cursor-pointer hover:text-white mt-14">
            <MdLogout className="w-5 h-5"/>
            <span>Cerrar Sesion</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
