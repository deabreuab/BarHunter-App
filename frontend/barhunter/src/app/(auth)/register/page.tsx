"use client";

import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { IoArrowBack } from "react-icons/io5";
import { RegisterFormData } from "../types";
import { DevTool } from "@hookform/devtools";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../hooks/useRegister";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

function Register() {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      toast.success("Registro exitoso");
      router.push("/login");
    },
    onError: (error: any) => {
      toast.error("Ocurrió un error durante el registro");
    },
  });

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<RegisterFormData>({
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  const onSubmit = (data: RegisterFormData) => {
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
            Únete y descubre los mejores lugares
          </p>
        </div>

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

          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="fullname"
                className="block text-sm font-medium mb-2 text-[#EEEEEE]"
              >
                Nombre completo
              </label>
              <input
                {...register("fullname", {
                  required: "Este campo es obligatorio",
                  minLength: {
                    value: 3,
                    message:
                      "El nombre completo debe tener al menos 3 caracteres",
                  },
                })}
                type="fullname"
                id="fullname"
                className="w-full bg-[#010316] border border-gray-800 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-[#3540E8] focus:border-transparent transition-all"
                placeholder="Tu nombre completo"
              />
              {errors.fullname && (
                <span className="text-red-500 text-sm">
                  {errors.fullname.message}
                </span>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2 text-[#EEEEEE]"
              >
                Correo electrónico
              </label>
              <input
                {...register("email", {
                  required: "Este campo es obligatorio",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Ingresa un correo electrónico válido",
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
                  required: "Este campo es obligatorio",
                  minLength: {
                    value: 8,
                    message: "La contraseña debe tener al menos 8 caracteres",
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

            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium mb-2 text-[#EEEEEE]"
              >
                Confirmar contraseña
              </label>
              <input
                {...register("confirmPassword", {
                  required: "Este campo es obligatorio",
                  validate: (value) =>
                    value === watch("password") ||
                    "Las contraseñas no coinciden",
                })}
                type="password"
                id="confirm-password"
                className="w-full bg-[#010316] border border-gray-800 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-[#3540E8] focus:border-transparent transition-all"
                placeholder="••••••••"
              />
              {errors.confirmPassword && (
                <span className="text-red-500 text-sm">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>

            <div>
              <div className="flex items-center mb-4">
                <input
                  {...register("terms", {
                    required: "Debes aceptar los términos y condiciones",
                  })}
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
              {errors.terms && (
                <span className="text-red-500 text-sm">
                  {errors.terms.message}
                </span>
              )}
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
                  {mutation.isPending ? "Registrando..." : "Registrarse"}
                </span>
              </button>
            </div>
            <DevTool control={control} />
          </form>
        </div>

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
