import { cn } from "@/lib/utils";

interface PageLoaderProps {
  message?: string;
  className?: string;
}

export function PageLoader({ 
  message = "Loading...", 
  className 
}: PageLoaderProps) {
  return (
    <div className={cn(
      "flex items-center justify-center min-h-[400px]",
      className
    )}>
      <div className="text-center space-y-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto" />
        <p className="text-sm text-muted-foreground">{message}</p>
      </div>
    </div>
  );
}
