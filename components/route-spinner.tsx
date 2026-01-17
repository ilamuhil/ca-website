"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type RouteSpinnerProps = {
  minDurationMs?: number;
};

export function RouteSpinner({ minDurationMs = 350 }: RouteSpinnerProps) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const showTimerRef = useRef<number | null>(null);
  const hideTimerRef = useRef<number | null>(null);

  useEffect(() => {
    // Avoid synchronously setting state inside an effect body.
    // Scheduling moves the update into a callback, preventing cascading renders.
    if (showTimerRef.current) window.clearTimeout(showTimerRef.current);
    if (hideTimerRef.current) window.clearTimeout(hideTimerRef.current);

    showTimerRef.current = window.setTimeout(() => setVisible(true), 0);
    hideTimerRef.current = window.setTimeout(() => setVisible(false), minDurationMs);

    return () => {
      if (showTimerRef.current) window.clearTimeout(showTimerRef.current);
      if (hideTimerRef.current) window.clearTimeout(hideTimerRef.current);
    };
  }, [pathname, minDurationMs]);

  if (!visible) return null;

  return (
    <div className="fixed right-4 top-4 z-60">
      <div className="grid h-9 w-9 place-items-center rounded-full border border-border bg-background/80 shadow-sm backdrop-blur">
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-border border-t-foreground" />
      </div>
    </div>
  );
}

