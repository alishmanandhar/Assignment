"use client";

import { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "./button";

interface ModalProps {
  children: ReactNode;
  className?: string;
}

export const Modal = ({ children,className }: ModalProps) => {
  return (
    <Card className={"w-96 shadow-2xl"} >
      <CardHeader>
        <CardTitle className="text-center">24 Birthdays Today</CardTitle>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      <CardFooter>
        <Button>View All</Button>
      </CardFooter>
    </Card>
  );
};
