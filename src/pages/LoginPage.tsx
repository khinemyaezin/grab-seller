import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router";
import { routes } from "@grab/seller-contracts";
import { ApiError } from "@grab/seller-api";
import { Button } from "@grab/seller-ui/components/button";
import { Input } from "@grab/seller-ui/components/input";
import { useAuth } from "../app/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setPending(true);
    setError(null);
    try {
      await login({ email: String(form.get("email")), password: String(form.get("password")) });
      navigate(routes.dashboard, { replace: true });
    } catch (reason) {
      setError(reason instanceof ApiError ? reason.message : "Unable to sign in");
    } finally {
      setPending(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-6">
      <form onSubmit={submit} className="w-full max-w-md space-y-5 rounded-xl border bg-card p-8 shadow-sm">
        <div><h1 className="text-2xl font-bold">Admin Login</h1><p className="mt-1 text-sm text-muted-foreground">Sign in to access the seller dashboard.</p></div>
        <Input name="email" type="email" placeholder="admin@example.com" required />
        <Input name="password" type="password" required />
        {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
        <Button className="w-full" type="submit" disabled={pending}>{pending ? "Signing in…" : "Sign in"}</Button>
      </form>
    </main>
  );
}
