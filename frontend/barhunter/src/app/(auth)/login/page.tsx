import Link from "next/link";
import React from "react";

function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#010316] p-4">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#3540E8] to-[#E41AD6] flex items-center justify-center mb-4"></div>
          <h1 className="text-4xl font-bold gradient-text mb-2">Bar Hunter</h1>
          <p className="text-[#EEEEEE] text-center">
            Encuentra los mejores bares cerca de ti
          </p>
        </div>

        <div className="bg-[#0a0a20] rounded-xl p-6 shadow-lg border border-gray-800">
          <h2 className="text-2xl font-bold mb-6 text-white">Iniciar Sesión</h2>

          <form className="space-y-5">
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

            <div className="flex justify-end">
              <Link href="#" className="text-sm text-[#E41AD6] hover:underline">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            <Link href="/" className="block w-full">
              <button
                type="button"
                className="w-full gradient-button text-white py-3 px-6 rounded-md font-medium hover:opacity-90 transition-opacity"
              >
                Iniciar Sesión
              </button>
            </Link>
          </form>
        </div>

        <div className="mt-6 text-center">
          <p className="text-[#EEEEEE]">
            ¿No tienes una cuenta?{" "}
            <Link
              href="/register"
              className="text-[#E41AD6] font-medium hover:underline"
            >
              Regístrate aquí
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Login;
