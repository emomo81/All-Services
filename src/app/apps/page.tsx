import Link from "next/link";
import { Search, LayoutGrid, Star } from "lucide-react";
import { Card, PageHeader } from "@/components/ui/Card";
import { apps, appCategories } from "@/lib/data";

const recentSlugs = ["hostel", "hrm", "project", "accounting", "website"];
const recent = recentSlugs
  .map((slug) => apps.find((a) => a.slug === slug))
  .filter((a): a is NonNullable<typeof a> => Boolean(a));

export default function AppsPage() {
  return (
    <div className="mx-auto max-w-[1400px]">
      <PageHeader
        title="Apps"
        subtitle="Browse and launch every application in your platform."
        action={
          <div className="relative w-full max-w-xs">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
            <input
              type="text"
              placeholder="Search apps..."
              className="w-full rounded-xl border border-white/8 bg-white/5 py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-white/35 outline-none focus:border-violet-400/40"
            />
          </div>
        }
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[220px_1fr]">
        <Card className="h-fit p-3">
          <button className="flex w-full items-center gap-3 rounded-xl bg-violet-500/15 px-3.5 py-2.5 text-sm font-semibold text-violet-300">
            <LayoutGrid className="h-4 w-4" /> All Apps
          </button>
          <div className="mt-2 space-y-1">
            {appCategories.map((cat) => (
              <button
                key={cat}
                className="flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-white/50 hover:bg-white/5 hover:text-white/85"
              >
                {cat}
              </button>
            ))}
          </div>
        </Card>

        <div className="space-y-6">
          <Card className="p-5">
            <div className="mb-4 flex items-center gap-2">
              <Star className="h-4 w-4 text-amber-400" />
              <h3 className="text-sm font-semibold text-white">
                Recently Used
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {recent.map((app) => (
                <Link
                  key={app.slug}
                  href={`/apps/${app.slug}`}
                  className="flex flex-col items-center gap-2 rounded-xl border border-white/6 bg-white/[0.02] p-4 text-center transition-colors hover:border-white/15 hover:bg-white/[0.06]"
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${app.gradient}`}
                  >
                    <app.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xs font-medium text-white/80">
                    {app.name}
                  </span>
                </Link>
              ))}
            </div>
          </Card>

          <Card className="p-5">
            <h3 className="mb-4 text-sm font-semibold text-white">
              All Apps ({apps.length})
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {apps.map((app) => (
                <Link
                  key={app.slug}
                  href={`/apps/${app.slug}`}
                  className="group rounded-2xl border border-white/6 bg-white/[0.02] p-4 transition-colors hover:border-white/15 hover:bg-white/[0.06]"
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${app.gradient} shadow-md`}
                    >
                      <app.icon className="h-5 w-5 text-white" strokeWidth={2} />
                    </div>
                    <span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] font-medium text-white/35">
                      {app.category}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-white">
                    {app.name}
                  </p>
                  <p className="mt-0.5 text-xs leading-snug text-white/40">
                    {app.description}
                  </p>
                </Link>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
