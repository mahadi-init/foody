"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Account, ID } from "appwrite";
import client from "@/lib/appwrite";
import { toast } from "sonner";

export default function SigninPage() {
  const { replace } = useRouter();
  const [isLoading, startTransition] = useTransition();

  const handleSubmit = (formData: FormData) => {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    startTransition(async () => {
      try {
        const account = new Account(client);
        await account.create(ID.unique(), email, password, name);
        toast.success("Signup successful");
        replace("/");
      } catch (error) {
        toast.error("Signup failed");
      }
    });
  };

  return (
    <div className="container mx-auto flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Sign up
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form action={handleSubmit}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" name="name" required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" name="email" required />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" name="password" required />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col space-y-2">
          <Link
            href="/forget-password"
            className="text-sm text-primary hover:underline"
          >
            Forgot your password?
          </Link>
          <p className="text-sm text-muted-foreground">
            Already have an account ?{" "}
            <Link href="/signin" className="text-primary hover:underline">
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
