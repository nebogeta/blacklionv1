"use client";
import { signOut } from "next-auth/react";
import { useState } from "react";
import { Button } from "./Button";
import { redirect } from "next/dist/server/api-utils";
import { toast } from "./toast";

const SignOutButton = ({}) => {
  const [isLoading, setIsLoading] = useState(false);

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
    } finally {
      setIsLoading(false);
    redirect("/");
    }
  };

  return (
    <Button onClick={signUserOut} isLoading={isLoading}>
      Sign out
    </Button>
  );
};

export default SignOutButton;
