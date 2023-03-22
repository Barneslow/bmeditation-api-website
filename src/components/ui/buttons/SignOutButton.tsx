"use client";

import { signOut } from "next-auth/react";
import { FC, useState } from "react";
import { toast } from "../toast";

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signUserOut = async () => {
    try {
      setIsLoading(true);
      await signOut();
    } catch (error) {
      toast({
        title: "Error signing out",
        message: "Please try again later.",
        type: "error",
      });
    }
  };

  return (
    <button className="btn auth-btn" onClick={signUserOut}>
      Sign out
    </button>
  );
};

export default SignOutButton;
