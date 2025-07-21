import { cn } from "@/lib/utils";

interface LoaderProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "dots" | "camera";
}

export function Loader({ className, size = "md", variant = "default" }: LoaderProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12", 
    lg: "w-16 h-16"
  };

  if (variant === "dots") {
    return (
      <div className={cn("flex space-x-1", className)}>
        <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: "0ms" }}></div>
        <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: "150ms" }}></div>
        <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: "300ms" }}></div>
      </div>
    );
  }

  if (variant === "camera") {
    return (
      <div className={cn("relative", sizeClasses[size], className)}>
        <div className="absolute inset-0 border-4 border-accent/20 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-2 flex items-center justify-center">
          <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9,2V7.38L10.39,8.77C10.83,8.32 11.39,8 12,8A3,3 0 0,1 15,11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V2M20,4V14.5L18.5,16H14V20H7V16H2.5L1,14.5V4H20M15,13A2,2 0 0,0 17,11A2,2 0 0,0 15,9A2,2 0 0,0 13,11A2,2 0 0,0 15,13Z" />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative", sizeClasses[size], className)}>
      <div className="absolute inset-0 border-4 border-muted rounded-full"></div>
      <div className="absolute inset-0 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

interface PageLoaderProps {
  message?: string;
}

export function PageLoader({ message = "Loading..." }: PageLoaderProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm">
      <div className="flex flex-col items-center space-y-6">
        {/* Main loader with camera effect */}
        <div className="relative">
          <Loader variant="camera" size="lg" />
          {/* Pulse effect */}
          <div className="absolute inset-0 border-4 border-accent/30 rounded-full animate-ping"></div>
        </div>
        
        {/* Brand name with typewriter effect */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">PixelCraft Studio</h2>
          <p className="text-muted-foreground">{message}</p>
          
          {/* Loading dots */}
          <div className="flex justify-center mt-4">
            <Loader variant="dots" />
          </div>
        </div>
      </div>
    </div>
  );
}