import { AuthResponse } from "../types/apiTypes";

export function saveUserData(data: AuthResponse): void {
  if (!data) {
    console.error("Nenhum dado fornecido para salvar no localStorage.");
    return;
  }
  localStorage.setItem("userData", JSON.stringify(data));
}

export function getUserData(): AuthResponse | null {
  const storedData = localStorage.getItem("userData");

  if (!storedData) {
    return null;
  }
  return JSON.parse(storedData) as AuthResponse;
}

export function logout(): void {
  localStorage.clear();
}
