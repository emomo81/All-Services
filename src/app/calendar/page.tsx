import { Plus, ChevronLeft, ChevronRight, Circle } from "lucide-react";
import { Card } from "@/components/ui/Card";

const days = [
  { label: "Mon", date: 21 },
  { label: "Tue", date: 22 },
  { label: "Wed", date: 23 },
  { label: "Thu", date: 24 },
  { label: "Fri", date: 25 },
  { label: "Sat", date: 26 },
  { label: "Sun", date: 27 },
];

const hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

const events = [
  { day: 0, hour: 10, label: "Team Stand-up", time: "10:00 - 10:30", color: "bg-violet-500/25 border-violet-400/50 text-violet-200" },
  { day: 2, hour: 11, label: "Client Meeting", time: "11:30 - 12:30", color: "bg-blue-500/25 border-blue-400/50 text-blue-200" },
  { day: 3, hour: 14, label: "Review Reports", time: "2:00 - 3:00", color: "bg-pink-500/25 border-pink-400/50 text-pink-200" },
  { day: 4, hour: 16, label: "Appointment with Dr. Smith", time: "4:00 - 4:30", color: "bg-emerald-500/25 border-emerald-400/50 text-emerald-200" },
];

const tasks = [
  { title: "Update stock inventory", project: "Pharmacy", priority: "High", status: "Pending" },
  { title: "Follow up with client", project: "CRM", priority: "Medium", status: "Pending" },
  { title: "Check pending orders", project: "Restaurant", priority: "High", status: "Pending" },
  { title: "Prepare monthly report", project: "Accounting", priority: "Medium", status: "Pending" },
  { title: "Team meeting", project: "Project", priority: "Low", status: "Pending" },
];

const priorityColor: Record<string, string> = {
  High: "text-red-300 bg-red-500/15",
  Medium: "text-amber-300 bg-amber-500/15",
  Low: "text-blue-300 bg-blue-500/15",
};

export default function CalendarPage() {
  return (
    <div className="mx-auto max-w-[1400px]">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white sm:text-3xl">
            Calendar
          </h1>
          <p className="mt-1 text-sm text-white/45">
            July 2025 · Week of Jul 21 – 27
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-xl border border-white/8 bg-white/5">
            <button className="rounded-l-xl p-2 text-white/50 hover:bg-white/8 hover:text-white">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button className="rounded-r-xl p-2 text-white/50 hover:bg-white/8 hover:text-white">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          <div className="flex items-center rounded-xl border border-white/8 bg-white/5 p-1 text-xs font-medium">
            <button className="rounded-lg px-3 py-1.5 text-white/45">Day</button>
            <button className="rounded-lg bg-violet-500/20 px-3 py-1.5 text-violet-300">
              Week
            </button>
            <button className="rounded-lg px-3 py-1.5 text-white/45">Month</button>
          </div>
          <button className="flex items-center gap-2 rounded-xl brand-gradient px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/20">
            <Plus className="h-4 w-4" /> Create Event
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_320px]">
        <Card className="overflow-x-auto p-5">
          <div className="min-w-[700px]">
            <div className="grid grid-cols-[56px_repeat(7,1fr)] gap-1">
              <div />
              {days.map((d) => (
                <div key={d.label} className="pb-3 text-center">
                  <p className="text-[11px] font-medium text-white/35">
                    {d.label}
                  </p>
                  <p
                    className={`mx-auto mt-1 flex h-7 w-7 items-center justify-center rounded-lg text-sm font-semibold ${
                      d.date === 21
                        ? "brand-gradient text-white"
                        : "text-white/80"
                    }`}
                  >
                    {d.date}
                  </p>
                </div>
              ))}
            </div>

            <div className="relative grid grid-cols-[56px_repeat(7,1fr)] gap-1">
              {hours.map((h) => (
                <div key={h} className="contents">
                  <div className="h-20 pr-2 text-right text-[11px] text-white/30">
                    {h > 12 ? h - 12 : h}
                    {h >= 12 ? "PM" : "AM"}
                  </div>
                  {days.map((d) => {
                    const ev = events.find(
                      (e) => e.day === days.indexOf(d) && e.hour === h
                    );
                    return (
                      <div
                        key={d.label + h}
                        className="relative h-20 rounded-lg border-t border-white/6"
                      >
                        {ev ? (
                          <div
                            className={`absolute inset-x-0.5 top-0.5 rounded-lg border px-2 py-1.5 text-[11px] font-medium ${ev.color}`}
                          >
                            <p className="font-semibold">{ev.label}</p>
                            <p className="opacity-70">{ev.time}</p>
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card className="p-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-white">Tasks</h3>
            <span className="text-xs text-white/35">{tasks.length} open</span>
          </div>
          <div className="space-y-2.5">
            {tasks.map((t) => (
              <div
                key={t.title}
                className="rounded-xl border border-white/6 bg-white/[0.02] p-3"
              >
                <div className="flex items-start gap-2">
                  <Circle className="mt-0.5 h-4 w-4 shrink-0 text-white/25" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-white/85">
                      {t.title}
                    </p>
                    <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                      <span className="rounded px-1.5 py-0.5 text-[10px] font-medium text-white/50 bg-white/5">
                        {t.project}
                      </span>
                      <span
                        className={`rounded px-1.5 py-0.5 text-[10px] font-medium ${priorityColor[t.priority]}`}
                      >
                        {t.priority}
                      </span>
                      <span className="rounded px-1.5 py-0.5 text-[10px] font-medium text-white/40 bg-white/5">
                        {t.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-white/30">
            Completed Tasks (24)
          </p>
        </Card>
      </div>
    </div>
  );
}
