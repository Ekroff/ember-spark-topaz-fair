import type { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/utils/cn";

type StatCardProps = {
  label: string;
  value: number;
  hint: string;
  icon: ReactNode;
  className?: string;
};

export function StatCard({ label, value, hint, icon, className }: StatCardProps) {
  return (
    <Card className={cn("flex items-start justify-between gap-4", className)}>
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-subtle">{label}</p>
        <p className="mt-3 font-mono text-4xl font-medium tabular-nums tracking-tight text-foreground">
          {value}
        </p>
        <p className="mt-2 text-sm text-muted">{hint}</p>
      </div>
      <span className="flex size-10 items-center justify-center rounded-md bg-elevated text-accent shadow-border">
        {icon}
      </span>
    </Card>
  );
}
