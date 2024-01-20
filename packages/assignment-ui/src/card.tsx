"use client";

import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  index?: string;
  item?: string;
}

export const Card = ({ children,index,item }: CardProps) => {
  return (
    <div className="w-full text-left mb-4" key={index}>
        <div className="flex flex-row gap-x-2.5 items-center">
            <div >
                <img className="w-12 h-12 rounded-full object-cover" src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="Your Alt Text"/>
            </div>
            <div className="flex flex-col">
                <div className="font-medium text-lg">{item.name}</div>
                <div className="decoration-[#696572]">{item.address.city}</div>
            </div>
        </div>
    </div>
  );
};
