"use client";

import React from "react";
import { Button, Card, CardBody, Chip } from "@heroui/react";
import { useRouter } from "next/navigation";
import { MapPinOff, MoveLeft, Compass } from "lucide-react"; // Lightweight icons

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-2xl w-full px-6 text-center">
        <Card className="border-none bg-background/60 dark:bg-default-100/50 backdrop-blur-md shadow-2xl" radius="2xl">
          <Card className="py-12 px-8">
            {/* The "Sticker" Icon Section */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="p-6 bg-danger-50 rounded-full animate-pulse">
                  <MapPinOff size={64} className="text-danger" />
                </div>
                <Chip
                  variant="shadow"
                  color="danger"
                  className="absolute -top-2 -right-8 animate-skeleton"
                >
                  404 Error
                </Chip>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-foreground">
              Destination Unreachable
            </h1>
            
            <p className="text-default-500 text-lg mb-10 max-w-md mx-auto">
              The attraction you are looking for has been moved, renamed, or is currently hidden deep in the jungle.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                color="primary"
                size="lg"
                variant="shadow"
                radius="full"
                startContent={<Compass size={20} />}
                onPress={() => router.push("/")}
                className="font-bold px-10"
              >
                Back to Home
              </Button>
              
              <Button
                color="default"
                size="lg"
                variant="bordered"
                radius="full"
                startContent={<MoveLeft size={20} />}
                onPress={() => router.back()}
                className="font-semibold"
              >
                Go Back
              </Button>
            </div>
          </Card>
        </Card>

        {/* Fun Easter Egg Text */}
        <p className="mt-8 text-default-400 text-sm flex items-center justify-center gap-2">
          Lost? Don,t worry, even the best explorers take a wrong turn. 🗺️
        </p>
      </div>
    </div>
  );
}