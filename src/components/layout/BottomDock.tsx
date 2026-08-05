"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles } from "lucide-react";
import { dockNav, dockNavRight } from "./nav";

function DockItem({
  href,
  label,
  icon: Icon,
  badge,
  active,
}: {
  href: string;
  label: string;
  icon: React.ElementType;
  badge?: number;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col items-center gap-1 rounded-xl px-3 py-1.5 sm:px-4"
    >
      <span
        className={`relative flex h-6 w-6 items-center justify-center transition-colors ${
          active ? "text-white" : "text-white/45 group-hover:text-white/80"
        }`}
      >
        <Icon className="h-5 w-5" strokeWidth={2} />
        {badge ? (
          <span className="absolute -right-1.5 -top-1.5 flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-pink-500 text-[9px] font-bold text-white">
            {badge}
          </span>
        ) : null}
      </span>
      <span
        className={`text-[10px] font-medium ${
          active ? "text-white" : "text-white/35 group-hover:text-white/70"
        }`}
      >
        {label}
      </span>
      {active ? (
        <span className="absolute -bottom-1 h-1 w-1 rounded-full bg-violet-400" />
      ) : null}
    </Link>
  );
}

export default function BottomDock() {
  const pathname = usePathname();
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const tick = () => setNow(new Date());
    const id = setInterval(tick, 1000 * 30);
    const initial = setTimeout(tick, 0);
    return () => {
      clearInterval(id);
      clearTimeout(initial);
    };
  }, []);

  return (
    <div className="fixed bottom-4 left-1/2 z-30 hidden -translate-x-1/2 md:flex">
      <div className="glass-strong flex items-center gap-1 rounded-2xl px-2 py-2 shadow-2xl shadow-black/40">
        {dockNav.map((item) => (
          <DockItem key={item.href} {...item} active={pathname === item.href} />
        ))}

        <Link
          href="/"
          className="mx-1.5 flex h-14 w-14 items-center justify-center rounded-2xl brand-gradient shadow-lg shadow-violet-500/30 transition-transform hover:scale-105"
        >
          <Sparkles className="h-6 w-6 text-white" strokeWidth={2.25} />
        </Link>

        {dockNavRight.map((item) => (
          <DockItem key={item.href} {...item} active={pathname === item.href} />
        ))}

        <div className="ml-2 hidden flex-col items-center border-l border-white/10 pl-4 pr-1 lg:flex">
          <span className="text-xs font-semibold text-white">
            {now
              ? now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
              : "--:--"}
          </span>
          <span className="text-[10px] text-white/35">
            {now
              ? now.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
              : ""}
          </span>
        </div>
      </div>
    </div>
  );
}
