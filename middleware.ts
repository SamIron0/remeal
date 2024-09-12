import { type NextRequest } from 'next/server';
import { updateSession } from './utils/supabase/middleware';

export async function middleware(request: NextRequest) {
  return await updateSession(request);

  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();

  // if (user) {
  //   const { data: userData } = await supabase
  //     .from("users")
  //     .select("subscription_status")
  //     .eq("auth_user_id", user.id)
  //     .single();

  //   if (userData && userData.subscription_status === "active") {
  //     return NextResponse.next();
  //   }
  // }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};