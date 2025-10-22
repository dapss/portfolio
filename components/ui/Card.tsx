import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div className={cn(
      "bg-primary rounded-xl shadow-lg border border-gray-800",
      className
    )}>
      {children}
    </div>
  );
};