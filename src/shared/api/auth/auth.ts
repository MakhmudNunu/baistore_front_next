const BASE_URL = process.env.NEXT_PUBLIC_API_URL; 

export async function login(email: string, password: string) {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  if (!res.ok) throw new Error("Login failed");
  return res.json();
}

export async function logout() {
  await fetch(`${BASE_URL}/auth/logout`, { method: "POST" });
}

export async function refreshToken(refreshToken: string) {
  const res = await fetch(`${BASE_URL}/token/refresh`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refreshToken })
  });
  if (!res.ok) throw new Error("Refresh failed");
  return res.json();
}
