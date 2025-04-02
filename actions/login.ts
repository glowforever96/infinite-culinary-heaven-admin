"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function loginAction(_: any, formData: FormData) {
  const id = formData.get("id")?.toString();
  const password = formData.get("password")?.toString();

  const res = await fetch(`${process.env.API_URL}/auth/login/admin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, password }),
    credentials: "include",
  });

  if (res.status === 401) {
    return {
      status: 401,
      message: "아이디, 비밀번호를 확인해주세요.",
      prevId: id,
    };
  }
  const { accessToken, refreshToken } = await res.json();
  (await cookies()).set("accessToken", accessToken, {
    httpOnly: true,
    path: "/",
  });
  (await cookies()).set("refreshToken", refreshToken, {
    httpOnly: true,
    path: "/",
  });

  redirect("/");
}
