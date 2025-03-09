import { RegisterForm } from "../../components/auth/register-form"
import { BackButton } from "@/components/ui/BackButton";

export default function LoginPage() {
  return (
  <div className="flex flex-col items-center justify-center min-h-screen bg-muted p-6 md:p-10 relative">
    <BackButton />
    <div className="w-full max-w-sm md:max-w-3xl">
      <RegisterForm />
    </div>
    <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary absolute bottom-0">
      By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
    </div>
  </div>
  )
}

