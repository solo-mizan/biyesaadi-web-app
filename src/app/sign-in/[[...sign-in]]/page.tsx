import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="relative flex justify-center items-center p-12 lg:p-20 grainy-dark">
      <SignIn path="/sign-in" />
    </div>
  );
}
