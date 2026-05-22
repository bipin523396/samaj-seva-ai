import { useEffect, useMemo, useState } from "react";

import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const initialFormState = {
  confirmPassword: "",
  email: "",
  name: "",
  password: "",
};

export function AuthDialog() {
  const { authDialogOpen, authMode, closeAuthDialog, login, openAuthDialog, register } = useAuth();
  const [formState, setFormState] = useState(initialFormState);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isRegisterMode = authMode === "register";

  useEffect(() => {
    if (!authDialogOpen) {
      setFormState(initialFormState);
      setErrorMessage("");
      setIsSubmitting(false);
    }
  }, [authDialogOpen]);

  const dialogCopy = useMemo(
    () =>
      isRegisterMode
        ? {
            description: "Create your Samaj Seva AI account to unlock personalized services.",
            submitLabel: "Create Account",
            title: "Create Account",
          }
        : {
            description: "Sign in to access your saved services and applications.",
            submitLabel: "Sign In",
            title: "Welcome Back",
          },
    [isRegisterMode],
  );

  const handleChange = (field: keyof typeof initialFormState) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((current) => ({
      ...current,
      [field]: event.target.value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");

    if (isRegisterMode && formState.password !== formState.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);

    try {
      if (isRegisterMode) {
        await register({
          email: formState.email,
          name: formState.name,
          password: formState.password,
        });
      } else {
        await login({
          email: formState.email,
          password: formState.password,
        });
      }
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Authentication failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={authDialogOpen} onOpenChange={(open) => (open ? openAuthDialog(authMode) : closeAuthDialog())}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{dialogCopy.title}</DialogTitle>
          <DialogDescription>{dialogCopy.description}</DialogDescription>
        </DialogHeader>

        <div className="flex gap-2 rounded-lg bg-muted p-1">
          <Button
            className="flex-1"
            disabled={isSubmitting}
            onClick={() => openAuthDialog("login")}
            type="button"
            variant={isRegisterMode ? "ghost" : "default"}
          >
            Sign In
          </Button>
          <Button
            className="flex-1"
            disabled={isSubmitting}
            onClick={() => openAuthDialog("register")}
            type="button"
            variant={isRegisterMode ? "default" : "ghost"}
          >
            Register
          </Button>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {isRegisterMode ? (
            <Input
              autoComplete="name"
              onChange={handleChange("name")}
              placeholder="Full name"
              required
              value={formState.name}
            />
          ) : null}

          <Input
            autoComplete="email"
            onChange={handleChange("email")}
            placeholder="Email address"
            required
            type="email"
            value={formState.email}
          />

          <Input
            autoComplete={isRegisterMode ? "new-password" : "current-password"}
            onChange={handleChange("password")}
            placeholder="Password"
            required
            type="password"
            value={formState.password}
          />

          {isRegisterMode ? (
            <Input
              autoComplete="new-password"
              onChange={handleChange("confirmPassword")}
              placeholder="Confirm password"
              required
              type="password"
              value={formState.confirmPassword}
            />
          ) : null}

          {errorMessage ? <p className="text-sm text-destructive">{errorMessage}</p> : null}

          <Button className="w-full gradient-saffron text-accent-foreground" disabled={isSubmitting} type="submit">
            {isSubmitting ? "Please wait..." : dialogCopy.submitLabel}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
