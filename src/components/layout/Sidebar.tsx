"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Plus, Boxes } from "lucide-react";
import { mainNav } from "./nav";
import { apps } from "@/lib/data";

const favoriteSlugs = ["restaurant", "pharmacy", "clinic", "stocks", "hostel"];
const favorites = favoriteSlugs
  .map((slug) => apps.find((a) => a.slug === slug))
  .filter((a): a is NonNullable<typeof a> => Boolean(a));

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex fixed inset-y-0 left-0 z-30 w-64 flex-col border-r border-white/8 bg-black/30 backdrop-blur-2xl">
      <div className="flex items-center gap-2.5 px-6 h-20 shrink-0">
        <div className="relative flex h-9 w-9 items-center justify-center rounded-xl brand-gradient shadow-lg shadow-violet-500/20">
          <Boxes className="h-5 w-5 text-white" strokeWidth={2.25} />
        </div>
        <span className="text-lg font-extrabold tracking-tight text-white">
          UniOS
        </span>
      </div>

      <nav className="flex-1 overflow-y-auto px-4 py-2 space-y-1">
        {mainNav.map((item) => {
          const active = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors ${
                active
                  ? "bg-white/10 text-white"
                  : "text-white/55 hover:bg-white/5 hover:text-white/90"
              }`}
            >
              <span className="flex items-center gap-3">
                <Icon
                  className={`h-[18px] w-[18px] ${
                    active ? "text-violet-400" : "text-white/45 group-hover:text-white/70"
                  }`}
                  strokeWidth={2}
                />
                {item.label}
              </span>
              {item.badge ? (
                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-violet-500 px-1 text-[11px] font-semibold text-white">
                  {item.badge}
                </span>
              ) : null}
            </Link>
          );
        })}

        <div className="pt-6">
          <p className="px-3.5 pb-2 text-[11px] font-semibold uppercase tracking-wider text-white/35">
            Favorites
          </p>
          <div className="space-y-1">
            {favorites.map((app) => (
              <Link
                key={app.slug}
                href={`/apps/${app.slug}`}
                className="flex items-center gap-3 rounded-xl px-3.5 py-2 text-sm font-medium text-white/55 hover:bg-white/5 hover:text-white/90 transition-colors"
              >
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br ${app.gradient}`}
                >
                  <app.icon className="h-3.5 w-3.5 text-white" strokeWidth={2.25} />
                </span>
                {app.name}
              </Link>
            ))}
            <button className="flex w-full items-center gap-3 rounded-xl px-3.5 py-2 text-sm font-medium text-white/35 hover:bg-white/5 hover:text-white/70 transition-colors">
              <Plus className="h-[18px] w-[18px]" strokeWidth={2} />
              Add Favorite
            </button>
          </div>
        </div>
      </nav>
    </aside>
  );
}
