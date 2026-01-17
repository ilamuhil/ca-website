import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold tracking-tight">Page not found</h1>
      <p className="text-muted-foreground">The page you’re looking for doesn’t exist.</p>
      <Button asChild variant="outline">
        <Link href="/">Go home</Link>
      </Button>
    </div>
  );
}

