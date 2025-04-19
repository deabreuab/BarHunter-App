"use client";

import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { LoginFormData } from "../types";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../hooks/useRegister";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveAccessToken } from "@/app/utils/localStorage";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (res) => {
      const { access_token } = res;
      saveAccessToken(access_token);
      toast.success("Login exitoso");
      router.push("/");
    },
    onError: () => {
      toast.error("Ocurrió un error durante el registro");
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
    mutation.mutate(data);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#010316] p-4">
      <ToastContainer />
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

          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2 text-[#EEEEEE]"
              >
                Correo electrónico
              </label>
              <input
                {...register("email", {
                  required: "El correo electrónico es obligatorio",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "El correo electrónico no es válido",
                  },
                })}
                type="email"
                id="email"
                className="w-full bg-[#010316] border border-gray-800 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-[#3540E8] focus:border-transparent transition-all"
                placeholder="ejemplo@correo.com"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-2 text-[#EEEEEE]"
              >
                Contraseña
              </label>
              <input
                {...register("password", {
                  required: "La contraseña es obligatoria",
                  minLength: {
                    value: 6,
                    message: "La contraseña debe tener al menos 6 caracteres",
                  },
                })}
                type="password"
                id="password"
                className="w-full bg-[#010316] border border-gray-800 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-[#3540E8] focus:border-transparent transition-all"
                placeholder="••••••••"
              />
              {errors.password && (
                <span className="text-red-500 text-sm">
                  {errors.password.message}
                </span>
              )}
            </div>

            <div className="flex justify-end">
              <Link href="#" className="text-sm text-[#E41AD6] hover:underline">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            <div className="flex justify-center mt-8">
              <button
                type="submit"
                disabled={mutation.isPending}
                className={`cursor-pointer px-[2px] py-[2px] text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 ${
                  mutation.isPending ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <span className="block bg-[#02031b] rounded-md px-10 py-2">
                  {mutation.isPending ? "Iniciando..." : "Iniciar Sesión"}
                </span>
              </button>
            </div>
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
