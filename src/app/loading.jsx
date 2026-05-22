import {Spinner} from "@heroui/react";

export default function Loading() {
  return (
    <div className="flex items-center gap-4 h-screen w-full justify-center">
      <Spinner 
      label="Please wait..."
      color="primary"
      size="lg"
      />
    </div>
  );
}