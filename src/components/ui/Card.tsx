import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`glass rounded-2xl ${className}`}>{children}</div>
  );
}

export function CardHeader({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-3 px-5 pt-5">
      <div>
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        {subtitle ? (
          <p className="mt-0.5 text-xs text-white/40">{subtitle}</p>
        ) : null}
      </div>
      {action}
    </div>
  );
}

export function PageHeader({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold text-white sm:text-3xl">{title}</h1>
        {subtitle ? <p className="mt-1 text-sm text-white/45">{subtitle}</p> : null}
      </div>
      {action}
    </div>
  );
}
