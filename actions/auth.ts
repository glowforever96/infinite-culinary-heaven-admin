"use server";
import { cookies } from "next/headers";

export async function fetchWithAuth(url: string, options: RequestInit) {
  const accessToken = (await cookies()).get("accessToken")?.value;

  const headers = {
    ...options.headers,
    Authorization: `Bearer ${accessToken}`,
  };

  console.log(headers);

  const res = await fetch(url, {
    method: "POST",
    body: options.body,
    headers,
    credentials: "include",
  });

  console.log(res);

  const data = await res.json();

  if (res.status === 401) {
    // accessToken 만료시
    console.log("accessToken 만료 재발급 필요");

    const { accessToken, refreshToken } = await refreshAccessToken();

    const cookieStore = await cookies();

    cookieStore.set("accessToken", accessToken, { httpOnly: true, path: "/" });
    cookieStore.set("refreshToken", refreshToken, {
      httpOnly: true,
      path: "/",
    });

    headers.Authorization = `Bearer ${accessToken}`;

    const retryRes = await fetch(url, {
      method: "POST",
      body: options.body,
      headers,
      credentials: "include",
    });
    const retryData = await retryRes.json();
    return retryData;
  }

  return data;
}

async function refreshAccessToken() {
  const refreshToken = (await cookies()).get("refreshToken")?.value;

  const res = await fetch(`${process.env.API_URL}/auth/reissue`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refreshToken }),
    credentials: "include",
  });

  console.log(refreshToken);

  console.log("--- Refresh Token 요청 결과 ---");
  console.log("status:", res.status);
  console.log("headers:", res.headers);
  const text = await res.text();
  console.log("body:", text);

  if (!res.ok) {
    throw new Error(`토큰 재발급 실패${res.status}`);
  }
  return res.json();
}
