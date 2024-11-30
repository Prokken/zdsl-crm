import { cn } from "@/lib/utils";

export const MainContent = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return <div {...props} className={cn("flex flex-col h-full", className)} />;
};

export const MainTopContent = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return <div {...props} className={cn("h-[var(--height-70)]", className)} />;
};

export const MainMiddleContent = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={cn(
        "h-[calc(100%-(var(--height-70)+var(--height-70)+var(--height-70)+var(--height-70)))]",
        className
      )}
    />
  );
};

export const MainBottomContent = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return <div {...props} className={cn("h-[var(--height-70)]", className)} />;
};
