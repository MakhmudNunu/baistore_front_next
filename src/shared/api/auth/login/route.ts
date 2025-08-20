import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Login failed" }, { status: 401 });
  }

  const data = await res.json();

  const response = NextResponse.json({ success: true });

  response.cookies.set("accessToken", data.accessToken, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 15,
  });

  response.cookies.set("refreshToken", data.refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return response;
}
