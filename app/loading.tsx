export default function Loading() {
  return (
    <div className="grid min-h-[60dvh] place-items-center">
      <div className="flex flex-col items-center gap-3 text-sm text-muted-foreground">
        <div className="h-7 w-7 animate-spin rounded-full border-2 border-border border-t-foreground" />
        <span className="text-xs text-muted-foreground">Loading</span>
      </div>
    </div>
  );
}

