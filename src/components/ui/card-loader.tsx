import { Skeleton } from "./skeleton";
import { cn } from "@/lib/utils";

interface CardLoaderProps {
  lines?: number;
  className?: string;
}

export function CardLoader({ lines = 3, className }: CardLoaderProps) {
  return (
    <div className={cn("space-y-3", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton 
          key={i} 
          className="h-4" 
          style={{ width: `${100 - (i * 15)}%` }}
        />
      ))}
    </div>
  );
}
