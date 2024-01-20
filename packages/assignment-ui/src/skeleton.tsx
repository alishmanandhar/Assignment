"use client";

import { ReactNode } from "react";
import { Skeleton as Sk } from "@/components/ui/skeleton"

interface ButtonProps {
  children: ReactNode;
}

export const Skeleton = ({ children }: ButtonProps) => {
  return (
    <>
        <div className="flex items-center space-x-4 mb-4">
            <Sk className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
                <Sk className="h-4 w-[250px]" />
                <Sk className="h-4 w-[200px]" />
            </div>
        </div>

        <div className="flex items-center space-x-4 mb-4">
            <Sk className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
                <Sk className="h-4 w-[250px]" />
                <Sk className="h-4 w-[200px]" />
            </div>
        </div>

        <div className="flex items-center space-x-4 mb-4">
            <Sk className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
                <Sk className="h-4 w-[250px]" />
                <Sk className="h-4 w-[200px]" />
            </div>
        </div>
    </>
  );
};
