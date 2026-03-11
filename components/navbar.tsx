"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-6 flex items-center justify-between">
        <span className="text-xl sm:text-2xl font-bold tracking-wide">
          CodeNakama
        </span>

        <Link href="/login">
          <Button>
            Start for Free <ArrowRight className="size-5" />
          </Button>
        </Link>
      </div>
    </header>
  );
}
