"use client";

import { ReactNode } from "react";
import { Button as Btn } from "@/components/ui/button";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <Btn className="w-full text-center decoration-white bg-gradient-to-r from-[#e56dd1] to-[#fe69a3] shadow-lg">
      {children}
    </Btn>
  );
};
