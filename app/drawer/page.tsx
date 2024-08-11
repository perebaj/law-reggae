"use client";

import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Component() {
  const [isMinimized, setIsMinimized] = useState(false);
  const toggleDrawer = () => {
    setIsMinimized(!isMinimized);
  };
  return (
    <div className="flex h-screen">
      <div
        className={`flex ${isMinimized ? "w-16" : "w-64"} transition-width h-full bg-[#1c1e24] duration-300`}
      >
        <div className="flex flex-col items-start space-y-4 p-4">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              {!isMinimized && (
                <div>
                  <div className="text-white">perebaj</div>
                  <div className="text-sm text-gray-400">Jonathan</div>
                </div>
              )}
            </div>
            <button onClick={toggleDrawer} className="ml-auto">
              <XIcon className="h-6 w-6 text-white" />
            </button>
          </div>
          <div className="flex flex-col space-y-4">
            <button
              onClick={toggleDrawer}
              className="flex items-center space-x-2"
            >
              <FocusIcon className="h-6 w-6 text-red-500" />
              {!isMinimized && <span className="text-white">Focusing</span>}
            </button>
            <button
              onClick={toggleDrawer}
              className="flex items-center space-x-2"
            >
              <UserIcon className="h-6 w-6 text-white" />
              {!isMinimized && <span className="text-white">Your profile</span>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FocusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
    </svg>
  );
}

function UserIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
