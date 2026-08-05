import { Plus, Circle, CheckCircle2 } from "lucide-react";
import { Card, PageHeader } from "@/components/ui/Card";

const tasks = [
  { title: "Update stock inventory", project: "Pharmacy", projectColor: "text-emerald-400 bg-emerald-400/10", priority: "High", due: "Today", done: false },
  { title: "Follow up with client", project: "CRM", projectColor: "text-violet-400 bg-violet-400/10", priority: "Medium", due: "Today", done: false },
  { title: "Check pending orders", project: "Restaurant", projectColor: "text-orange-400 bg-orange-400/10", priority: "High", due: "Tomorrow", done: false },
  { title: "Prepare monthly report", project: "Accounting", projectColor: "text-green-400 bg-green-400/10", priority: "Medium", due: "Jul 25", done: false },
  { title: "Design new landing page", project: "Website", projectColor: "text-purple-400 bg-purple-400/10", priority: "Low", due: "Jul 26", done: false },
  { title: "Review employee timesheets", project: "HRM", projectColor: "text-amber-400 bg-amber-400/10", priority: "Medium", due: "Jul 27", done: false },
  { title: "Restock pharmacy shelf A3", project: "Pharmacy", projectColor: "text-emerald-400 bg-emerald-400/10", priority: "Low", due: "Completed", done: true },
  { title: "Send invoice to City Clinic", project: "Accounting", projectColor: "text-green-400 bg-green-400/10", priority: "High", due: "Completed", done: true },
];

const priorityColor: Record<string, string> = {
  High: "text-red-300 bg-red-500/15",
  Medium: "text-amber-300 bg-amber-500/15",
  Low: "text-blue-300 bg-blue-500/15",
};

export default function TasksPage() {
  const active = tasks.filter((t) => !t.done);
  const completed = tasks.filter((t) => t.done);

  return (
    <div className="mx-auto max-w-[1400px]">
      <PageHeader
        title="Tasks"
        subtitle="Keep track of everything that needs to get done."
        action={
          <button className="flex items-center gap-2 rounded-xl brand-gradient px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20">
            <Plus className="h-4 w-4" /> New Task
          </button>
        }
      />

      <Card>
        <div className="flex items-center gap-1 border-b border-white/8 px-5 pt-4">
          <button className="rounded-t-lg border-b-2 border-violet-400 px-3 pb-3 text-sm font-semibold text-white">
            My Tasks
          </button>
          <button className="rounded-t-lg px-3 pb-3 text-sm font-medium text-white/40 hover:text-white/70">
            Team Tasks
          </button>
          <button className="rounded-t-lg px-3 pb-3 text-sm font-medium text-white/40 hover:text-white/70">
            All Tasks
          </button>
        </div>

        <div className="divide-y divide-white/6">
          {active.map((t) => (
            <div
              key={t.title}
              className="flex items-center gap-4 px-5 py-4 transition-colors hover:bg-white/[0.02]"
            >
              <Circle className="h-5 w-5 shrink-0 text-white/25" />
              <p className="min-w-0 flex-1 truncate text-sm font-medium text-white/85">
                {t.title}
              </p>
              <span
                className={`hidden shrink-0 rounded-lg px-2 py-1 text-[11px] font-medium sm:inline-block ${t.projectColor}`}
              >
                {t.project}
              </span>
              <span
                className={`hidden shrink-0 rounded-lg px-2 py-1 text-[11px] font-medium md:inline-block ${priorityColor[t.priority]}`}
              >
                {t.priority}
              </span>
              <span className="w-16 shrink-0 text-right text-xs text-white/40">
                {t.due}
              </span>
            </div>
          ))}
        </div>

        <div className="border-t border-white/8 px-5 py-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/30">
            Completed ({completed.length})
          </p>
          <div className="space-y-3">
            {completed.map((t) => (
              <div key={t.title} className="flex items-center gap-4 opacity-50">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
                <p className="min-w-0 flex-1 truncate text-sm font-medium text-white/70 line-through">
                  {t.title}
                </p>
                <span className={`shrink-0 rounded-lg px-2 py-1 text-[11px] font-medium ${t.projectColor}`}>
                  {t.project}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
