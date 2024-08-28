import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/sonner";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { Database } from "@/supabase/types";  
import Navigation from "@/components/Navigation";

const defaultUrl = "https://remeal.food"


export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Remeal",
  description: "Discover recipes based on ingredients you have. Remeal helps you cook delicious meals with what's in your kitchen.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const supabase = createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
      },
    }
  );
  const session = (await supabase.auth.getSession()).data.session;

  return (
    <html lang="en" className={GeistSans.className}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="hide-scrollbar bg-background text-foreground">
        <SpeedInsights />
        <Navigation />
        <main className="min-h-screen pt-12 space-y-12 flex flex-col items-center">
          {children}
          <Toaster />
        </main>
      </body>
    </html>
  );
}
