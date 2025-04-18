import Link from "next/link";
import React from "react";
import { IoArrowBack } from "react-icons/io5";

function Register() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#010316] p-4">
      <div className="w-full max-w-md">
        {/* Logo y Título */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#3540E8] to-[#E41AD6] flex items-center justify-center mb-4"></div>
          <h1 className="text-4xl font-bold gradient-text mb-2">Bar Hunter</h1>
          <p className="text-[#EEEEEE] text-center">
            Únete y descubre los mejores lugares
          </p>
        </div>

        {/* Formulario de Registro */}
        <div className="bg-[#0a0a20] rounded-xl p-6 shadow-lg border border-gray-800">
          <div className="flex items-center mb-4">
            <Link
              href="/login"
              className="text-[#EEEEEE] hover:text-white mr-2"
            >
              <IoArrowBack className="h-6 w-6" />
            </Link>
            <h2 className="text-2xl font-bold text-white">Crear Cuenta</h2>
          </div>

          <form className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-sm font-medium mb-2 text-[#EEEEEE]"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  className="w-full bg-[#010316] border border-gray-800 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-[#3540E8] focus:border-transparent transition-all"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label
                  htmlFor="apellido"
                  className="block text-sm font-medium mb-2 text-[#EEEEEE]"
                >
                  Apellido
                </label>
                <input
                  type="text"
                  id="apellido"
                  className="w-full bg-[#010316] border border-gray-800 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-[#3540E8] focus:border-transparent transition-all"
                  placeholder="Tu apellido"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2 text-[#EEEEEE]"
              >
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-[#010316] border border-gray-800 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-[#3540E8] focus:border-transparent transition-all"
                placeholder="ejemplo@correo.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-2 text-[#EEEEEE]"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                className="w-full bg-[#010316] border border-gray-800 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-[#3540E8] focus:border-transparent transition-all"
                placeholder="••••••••"
              />
            </div>

            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium mb-2 text-[#EEEEEE]"
              >
                Confirmar contraseña
              </label>
              <input
                type="password"
                id="confirm-password"
                className="w-full bg-[#010316] border border-gray-800 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-[#3540E8] focus:border-transparent transition-all"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 mr-2 accent-[#E41AD6]"
              />
              <label htmlFor="terms" className="text-sm text-[#EEEEEE]">
                Acepto los{" "}
                <Link href="#" className="text-[#E41AD6] hover:underline">
                  términos y condiciones
                </Link>
              </label>
            </div>

            <Link href="/" className="block w-full">
              <button
                type="button"
                className="w-full gradient-button text-white py-3 px-6 rounded-md font-medium hover:opacity-90 transition-opacity"
              >
                Registrarse
              </button>
            </Link>
          </form>
        </div>

        {/* Login Link */}
        <div className="mt-6 text-center">
          <p className="text-[#EEEEEE]">
            ¿Ya tienes una cuenta?{" "}
            <Link
              href="/login"
              className="text-[#E41AD6] font-medium hover:underline"
            >
              Inicia sesión aquí
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Register;
