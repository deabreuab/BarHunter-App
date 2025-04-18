"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlinePlace } from "react-icons/md";
import Reviews from "./components/Reviews";
import { useParams } from "next/navigation";
import { useBrewery } from "../../hooks/useBreweries";

const mockOpinions = [
  {
    id: "1",
    user: "Cris",
    avatar: "https://i.pravatar.cc/150?u=cris",
    comment:
      "Me encantan este tipo de cafés! La velocidad de wifi es muy buena y el ambiente es perfecto para trabajar.",
  },
  {
    id: "2",
    user: "Dina",
    avatar: "https://i.pravatar.cc/150?u=dina",
    comment:
      "El café es delicioso y el lugar es muy acogedor. Ideal para pasar la tarde.",
  },
  {
    id: "3",
    user: "Julia",
    avatar: "https://i.pravatar.cc/150?u=julia",
    comment:
      "Un lugar increíble, siempre encuentro un espacio tranquilo para concentrarme.",
  },
  {
    id: "4",
    user: "Rubén",
    avatar: "https://i.pravatar.cc/150?u=ruben",
    comment:
      "El servicio es excelente y la comida es deliciosa. Definitivamente volveré.",
  },
  {
    id: "5",
    user: "Bruno",
    avatar: "https://i.pravatar.cc/150?u=bruno",
    comment:
      "Un lugar perfecto para estudiar o trabajar. La conexión a internet es rápida.",
  },
];

function Place() {
  const { id } = useParams();
  // TODO: Evaluar caso de error
  const { data, isLoading } = useBrewery(id as string);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1>No se encontró la cervecería</h1>
      </div>
    );
  }
  return (
    <div className="container mx-auto py-6">
      <div className="mb-8">
        <div className="flex items-end gap-4 mb-4">
          <h1 className="text-4xl font-bold">{data?.name}</h1>
        </div>
        <div className="flex items-center gap-2 text-gray-400 mb-1">
          <MdOutlinePlace className="w-5 h-5" />
          <span>{data?.address_1 || "No especificada"}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <FaPhoneAlt className="w-4 h-4" />
          <span>{data?.phone || "No disponible"}</span>
        </div>
      </div>

      <div className="flex overflow-x-auto space-x-4 mb-8">
        {[1, 2, 3].map((i) => (
          <img
            key={i}
            src={`https://placehold.co/200x150?text=Bar+Image+${i}`}
            alt={`Bar Image ${i}`}
            className="w-48 h-32 object-cover rounded-lg"
          />
        ))}
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-6">Opiniones</h2>
        <div className="flex flex-col gap-4">
          {mockOpinions.map((opinion, index) => (
            <div key={index} className="mb-5">
              <Reviews
                avatar={opinion.avatar}
                comment={opinion.comment}
                user={opinion.user}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 md:flex-row md:justify-center md:gap-8">
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold w-full md:w-64">
          Reservar mesa
        </button>
        <button className="px-[2px] py-[2px] text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:to-pink-600">
          <span className="block bg-[#02031b] rounded-md px-4 py-2">
            Opciones de transporte
          </span>
        </button>
      </div>
    </div>
  );
}

export default Place;
