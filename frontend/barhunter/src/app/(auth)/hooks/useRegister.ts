import { LoginFormData, RegisterFormData } from "../types";

export async function registerUser(data: RegisterFormData) {
  const url = `https://barhunter-backend.vercel.app/auth/register`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Error al registrar el usuario");
  }

  return response.json();
}

export async function loginUser(data: LoginFormData) {
  const url = `https://barhunter-backend.vercel.app/auth/login`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Error al iniciar sesión");
  }

  return response.json();
}