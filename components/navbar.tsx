"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight, Code } from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-background sticky top-0 z-50">
      <div className="container mx-auto px-6 py-5 flex justify-between">
        <div className="flex items-center gap-2">
          <div className="size-8 bg-white rounded-lg flex items-center justify-center">
            <Code className="text-black size-6" />
          </div>
          <p className="text-xl sm:text-2xl font-bold tracking-tight">
            CodeNakama
          </p>
        </div>

        <Link href="/login">
          <Button>
            Start for Free <ArrowRight className="size-5" />
          </Button>
        </Link>
      </div>
    </header>
  );
}
