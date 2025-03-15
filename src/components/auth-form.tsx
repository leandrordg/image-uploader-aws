import { SignInGoogle } from "@/components/sign-in-google";

export function AuthForm() {
  return (
    <div className="flex flex-col gap-4">
      <SignInGoogle />
    </div>
  );
}
