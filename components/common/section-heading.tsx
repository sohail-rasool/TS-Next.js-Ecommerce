import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
};

export function SectionHeading({
  children,
  className,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <Tag
      className={cn(
        "font-display text-[32px] leading-[1.1] md:text-5xl",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
