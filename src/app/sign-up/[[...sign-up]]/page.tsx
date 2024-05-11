import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="relative flex justify-center items-center p-12 lg:p-20">
      <SignUp path="/sign-up" />
    </div>
  );
}
