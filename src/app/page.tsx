import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const preferredLocale = (await cookies()).get("portfolio-locale")?.value;
  redirect(preferredLocale === "ar" ? "/ar" : "/en");
}
