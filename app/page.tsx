import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { userId, sessionClaims } = await auth();
  
  // If no user is found, redirect to sign-in
  if (!userId) {
    redirect("/sign-in");
  }

  // Get the user's role from session claims
  const userRole = sessionClaims?.metadata?.role as string | undefined;

  // Redirect based on role
  if (userRole === 'admin') {
    redirect("/admin");
  } else if (userRole === "teacher") {
    redirect("/teacher");
  } else {
    // Default to student dashboard for any other role or if role is undefined
    redirect("/student");
  }
}

