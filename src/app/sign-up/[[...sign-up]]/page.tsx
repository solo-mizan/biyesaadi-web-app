import { SignUp } from "@clerk/nextjs";
import { isClerkConfigured } from "@/lib/clerk";

export default function Page() {
  if (!isClerkConfigured) {
    return (
      <div className="relative flex justify-center items-center p-12 lg:p-20 w-full h-full grainy-light">
        <p>
          Sign-up is unavailable until Clerk is configured. Add the Clerk
          environment variables described in the README and restart the app.
        </p>
      </div>
    );
  }

  return (
    <div className="relative flex justify-center items-center p-12 lg:p-20 w-full h-full grainy-light">
      <SignUp path="/sign-up" />
    </div>
  );
}
