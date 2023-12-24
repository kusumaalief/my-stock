import Logo from "@/components/Logo";
import { Toaster } from "@/components/ui/toaster";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return (
    <div className="w-screen h-screen grid-cols-2 grid place-items-center overflow-x-hidden">
      <div>
        <Logo className="text-5xl" />
        <p className="mt-2 text-zinc-800">Inventory Management System</p>
      </div>

      <div>{children}</div>
      <Toaster />
    </div>
  );
};

export default AuthLayout;
