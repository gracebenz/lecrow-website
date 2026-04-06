"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function checkPassword(formData: FormData) {
  const password = formData.get("password") as string;
  const from = formData.get("from") as string | null;

  if (password === process.env.CROW_PASSWORD) {
    const cookieStore = await cookies();
    cookieStore.set("crow-auth", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30,
    });
    redirect(from && from.startsWith("/work") ? from : "/work");
  }
  redirect(`/enter?error=1${from ? `&from=${encodeURIComponent(from)}` : ""}`);
}
