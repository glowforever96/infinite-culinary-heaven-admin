"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function loginAction(_: any, formData: FormData) {
  const id = formData.get("id")?.toString();
  const password = formData.get("password")?.toString();

  console.log(id, password);

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
    };
  }
  const { accessToken } = await res.json();
  (await cookies()).set("accessToken", accessToken, {
    httpOnly: true,
    path: "/",
  });

  redirect("/");
}
