"use client";

import { FC, useState } from "react";

import { signIn } from "next-auth/react";
import { toast } from "../toast";

interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState(false);

  const signInWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signIn("google");
    } catch (error) {
      toast({
        title: "Error Signing In",
        message: "Please try again later",
        type: "error",
      });
    }
  };

  return (
    <button className="btn auth-btn" onClick={signInWithGoogle}>
      Sign In
    </button>
  );
};

export default SignInButton;
