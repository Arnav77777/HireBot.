import { clerkMiddleware } from "@clerk/nextjs/server";

// Debugging environment variables
console.log("Clerk Publishable Key in Middleware:", process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);
console.log("Clerk Secret Key in Middleware:", process.env.CLERK_SECRET_KEY);

const isProtectedRoute = createRouteMatcher(['/dashboard(.)', '/forum(.)']);
export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) await auth.protect()
});
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};