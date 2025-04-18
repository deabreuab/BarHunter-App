/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlinePlace } from "react-icons/md";
import { Brewery } from "../(main)/types";
import Link from "next/link";


function Card({ name, address_1, city, phone, id }: Brewery) {
  return (
    <div className="bg-[#0f172a] text-white p-4 rounded-lg shadow-md max-w-sm flex flex-col gap-4">
      <h2 className="text-lg font-bold">{name}</h2>
      <div className="flex items-center gap-4">
        <img
          src="https://placehold.co/50"
          alt="Bar"
          className="w-[71px] h-[71px] rounded-full"
        />
        <div className="flex flex-col gap-2">
          <div className="flex items-center text-sm mb-1">
            <MdOutlinePlace className="w-5 h-5 inline-block mr-1" />
            <span
              title={`${address_1}, ${city}`}
              className="text-sm overflow-hidden text-ellipsis whitespace-nowrap block w-full max-w-[160px]"
            >
              {address_1 || 'No especificada'}, {city}
            </span>
          </div>
          <div className="flex items-center text-sm mb-1 gap-1">
            <FaPhoneAlt className="w-4 h-4 inline-block mr-1" />
            <span className="text-sm">{phone || 'No disponible'}</span>
          </div>
        </div>
      </div>
      <Link
        href={`/place/${id}`}
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg w-full mt-2 cursor-pointer text-center"
      >
        Ver más
      </Link>
    </div>
  );
}

export default Card;
