import Link from "next/link";
import {
  CloudSun,
  Sparkles,
  ChevronRight,
  Circle,
  ArrowUpRight,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import MiniCalendar from "@/components/dashboard/MiniCalendar";
import SalesOverviewChart from "@/components/charts/SalesOverviewChart";
import {
  apps,
  appCategories,
  recentActivities,
  myTasks,
  systemStatus,
  salesOverview,
  quickActions,
} from "@/lib/data";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-[1400px]">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* Left / center column */}
        <div className="space-y-6 xl:col-span-2">
          {/* Greeting + weather */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <Card className="flex-1 p-6">
              <p className="text-lg text-white/80">
                Good Morning, Emmanuel <span className="inline-block">👋</span>
              </p>
              <h1 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
                Everything you need, in one platform.
              </h1>
            </Card>
            <Card className="flex w-full items-center gap-4 p-5 sm:w-64">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400/20 to-blue-500/20">
                <CloudSun className="h-6 w-6 text-sky-300" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  Monday, July 21, 2025
                </p>
                <p className="text-xs text-white/40">Kigali, Rwanda</p>
                <p className="mt-1 text-lg font-bold text-white">24°C</p>
              </div>
            </Card>
          </div>

          {/* All applications */}
          <Card>
            <div className="flex flex-wrap items-center justify-between gap-3 px-5 pt-5">
              <h3 className="text-sm font-semibold text-white">
                All Applications
              </h3>
              <div className="flex flex-wrap items-center gap-1.5">
                <button className="rounded-lg bg-violet-500/20 px-3 py-1.5 text-xs font-semibold text-violet-300">
                  All
                </button>
                {appCategories.map((cat) => (
                  <button
                    key={cat}
                    className="rounded-lg px-3 py-1.5 text-xs font-medium text-white/45 hover:bg-white/5 hover:text-white/80"
                  >
                    {cat}
                  </button>
                ))}
                <Link
                  href="/apps"
                  className="ml-1 flex items-center gap-1 rounded-lg border border-white/10 px-3 py-1.5 text-xs font-medium text-white/60 hover:text-white"
                >
                  <Sparkles className="h-3.5 w-3.5" /> Customize
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 p-5 sm:grid-cols-3 lg:grid-cols-4">
              {apps.map((app) => (
                <Link
                  key={app.slug}
                  href={`/apps/${app.slug}`}
                  className="group rounded-2xl border border-white/6 bg-white/[0.02] p-4 transition-colors hover:border-white/15 hover:bg-white/[0.06]"
                >
                  <div
                    className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${app.gradient} shadow-md`}
                  >
                    <app.icon className="h-5 w-5 text-white" strokeWidth={2} />
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

          {/* Calendar / status / tasks */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <Card className="p-5">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-white">Calendar</h3>
                <span className="text-xs text-white/35">July 2025</span>
              </div>
              <MiniCalendar />
            </Card>

            <Card className="p-5">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-white">
                  System Status
                </h3>
                <span className="flex items-center gap-1 text-xs font-medium text-emerald-400">
                  <Circle className="h-2 w-2 fill-emerald-400 text-emerald-400" />
                  All Operational
                </span>
              </div>
              <div className="space-y-3">
                {systemStatus.map((s) => (
                  <div key={s.name} className="flex items-center gap-2.5">
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-lg ${s.color}`}
                    >
                      <s.icon className="h-3.5 w-3.5" strokeWidth={2} />
                    </span>
                    <span className="flex-1 text-xs font-medium text-white/75">
                      {s.name}
                    </span>
                    <span className="text-[11px] font-medium text-emerald-400/90">
                      {s.status}
                    </span>
                  </div>
                ))}
                <div className="flex items-center justify-between border-t border-white/8 pt-3 text-xs">
                  <span className="text-white/40">Server Uptime</span>
                  <span className="font-semibold text-white">99.9%</span>
                </div>
              </div>
            </Card>

            <Card className="p-5">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-white">Tasks</h3>
                <Link
                  href="/tasks"
                  className="text-xs font-medium text-violet-300 hover:text-violet-200"
                >
                  View All
                </Link>
              </div>
              <div className="space-y-3">
                {myTasks.map((t) => (
                  <div key={t.title} className="flex items-start gap-2.5">
                    <Circle className="mt-0.5 h-4 w-4 shrink-0 text-white/25" />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-xs font-medium text-white/80">
                        {t.title}
                      </p>
                      <div className="mt-1 flex items-center gap-1.5">
                        <span
                          className={`rounded px-1.5 py-0.5 text-[10px] font-medium ${t.projectColor}`}
                        >
                          {t.project}
                        </span>
                        <span className="text-[10px] text-white/35">
                          {t.due}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          <Card>
            <div className="flex items-center justify-between px-5 pt-5">
              <h3 className="text-sm font-semibold text-white">
                Sales Overview
              </h3>
              <span className="rounded-lg bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/45">
                This Month
              </span>
            </div>
            <div className="px-5 pt-1">
              <p className="text-2xl font-bold text-white">$12,540</p>
              <p className="flex items-center gap-1 text-xs font-medium text-emerald-400">
                <ArrowUpRight className="h-3.5 w-3.5" /> 18.2%{" "}
                <span className="text-white/35">Total Sales</span>
              </p>
            </div>
            <SalesOverviewChart data={salesOverview} />
          </Card>

          <Card className="p-5">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-white">
                Recent Activities
              </h3>
              <button className="text-xs font-medium text-violet-300 hover:text-violet-200">
                View All
              </button>
            </div>
            <div className="space-y-4">
              {recentActivities.map((a) => (
                <div key={a.title} className="flex items-start gap-3">
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${a.color}`}
                  >
                    <a.icon className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-white/85">
                      {a.title}
                    </p>
                    <p className="text-[11px] text-white/35">
                      {a.subtitle} · {a.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-5">
            <h3 className="mb-3 text-sm font-semibold text-white">
              Quick Actions
            </h3>
            <div className="space-y-1.5">
              {quickActions.map((q) => (
                <button
                  key={q.label}
                  className="flex w-full items-center gap-3 rounded-xl px-2.5 py-2.5 text-left transition-colors hover:bg-white/5"
                >
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-xl ${q.color}`}
                  >
                    <q.icon className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <span className="flex-1 text-xs font-medium text-white/80">
                    {q.label}
                  </span>
                  <ChevronRight className="h-4 w-4 text-white/25" />
                </button>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
