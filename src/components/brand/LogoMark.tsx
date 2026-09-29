import { cn } from "@/utils/cn";

type LogoMarkProps = {
  className?: string;
};

export function LogoMark({ className }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("size-7", className)}
      aria-hidden="true"
    >
      <rect x="1" y="1" width="30" height="30" rx="8" className="fill-elevated" />
      <circle cx="10" cy="10" r="2" className="fill-accent" />
      <circle cx="22" cy="10" r="2" className="fill-accent" />
      <circle cx="10" cy="22" r="2" className="fill-accent" />
      <circle cx="22" cy="22" r="2" className="fill-accent" />
      <path
        d="M10 10h12M10 10v12M22 10v12M10 22h12M10 10l12 12M22 10L10 22"
        className="stroke-accent/50"
        strokeWidth="1.25"
        fill="none"
      />
    </svg>
  );
}
