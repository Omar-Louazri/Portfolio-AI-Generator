'use client';

import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function BackButton() {
  const router = useRouter();

  return (
    <Button variant="ghost" onClick={() => router.back()} className="flex items-center gap-2">
      <ArrowLeft className="h-4 w-4" />
      Back
    </Button>
  );
}
