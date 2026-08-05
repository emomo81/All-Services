import {
  MapPin,
  Mail,
  Calendar as CalendarIcon,
  LogIn,
  Settings2,
  FileText,
  ShoppingBag,
} from "lucide-react";
import { Card } from "@/components/ui/Card";

const stats = [
  { label: "Projects", value: "128" },
  { label: "Tasks Completed", value: "1,256" },
  { label: "Apps Used", value: "24" },
  { label: "Success Rate", value: "98%" },
];

const tabs = ["Overview", "Activity", "Achievements", "Settings"];

const recentActivity = [
  { icon: LogIn, text: "Logged in to the system", time: "2 min ago" },
  { icon: Settings2, text: "Updated system settings", time: "1 hr ago" },
  { icon: FileText, text: "Created new invoice", time: "3 hrs ago" },
  { icon: ShoppingBag, text: "Added new product", time: "5 hrs ago" },
];

export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-[1400px]">
      <Card className="relative overflow-hidden p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet-600/20 blur-[100px]" />
        <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-600 text-2xl font-bold text-white ring-4 ring-white/10">
            EM
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-white sm:text-2xl">
              Emmanuel M.
            </h1>
            <p className="text-sm text-white/45">Administrator</p>
            <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-white/40">
              <span className="flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5" /> emmanuel@unios.com
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" /> Kigali, Rwanda
              </span>
            </div>
          </div>
          <button className="rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10">
            Edit Profile
          </button>
        </div>

        <div className="relative mt-8 grid grid-cols-2 gap-4 border-t border-white/8 pt-6 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-bold text-white">{s.value}</p>
              <p className="text-xs text-white/40">{s.label}</p>
            </div>
          ))}
        </div>
      </Card>

      <div className="mt-6 flex items-center gap-1 border-b border-white/8">
        {tabs.map((t, i) => (
          <button
            key={t}
            className={`px-4 pb-3 text-sm font-medium transition-colors ${
              i === 0
                ? "border-b-2 border-violet-400 text-white"
                : "text-white/40 hover:text-white/70"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="p-5">
          <h3 className="mb-3 text-sm font-semibold text-white">About Me</h3>
          <p className="text-sm leading-relaxed text-white/55">
            System administrator with 5+ years of experience in business
            management and platform administration.
          </p>
          <div className="mt-5 flex items-center gap-2 border-t border-white/8 pt-4 text-xs text-white/40">
            <CalendarIcon className="h-3.5 w-3.5" />
            Member Since <span className="text-white/70">March 15, 2024</span>
          </div>
        </Card>

        <Card className="p-5">
          <h3 className="mb-4 text-sm font-semibold text-white">
            Recent Activity
          </h3>
          <div className="space-y-4">
            {recentActivity.map((a, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
                  <a.icon className="h-4 w-4" />
                </span>
                <p className="flex-1 text-xs font-medium text-white/80">
                  {a.text}
                </p>
                <span className="shrink-0 text-[11px] text-white/35">
                  {a.time}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
