import Homepage from "@/components/Home/Homepage";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = createClient(cookies());
  const user = await supabase.auth.getUser();
  if (user && user.data.user) {
    redirect("/search");
  }
  return <Homepage />;
}
