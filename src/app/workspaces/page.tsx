import { Plus, MoreHorizontal, ArrowRight } from "lucide-react";
import { Card, PageHeader } from "@/components/ui/Card";
import { workspaces } from "@/lib/data";

export default function WorkspacesPage() {
  return (
    <div className="mx-auto max-w-[1400px]">
      <PageHeader
        title="Workspaces"
        subtitle="Organize your apps, teams and data into dedicated workspaces."
        action={
          <button className="flex items-center gap-2 rounded-xl brand-gradient px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20">
            <Plus className="h-4 w-4" /> Create Workspace
          </button>
        }
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {workspaces.map((ws) => (
          <Card
            key={ws.name}
            className="group relative overflow-hidden p-5 transition-colors hover:border-white/20"
          >
            <div className="flex items-start justify-between">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${ws.gradient} shadow-md`}
              >
                <ws.icon className="h-5 w-5 text-white" strokeWidth={2} />
              </div>
              <button className="rounded-lg p-1.5 text-white/30 hover:bg-white/8 hover:text-white/70">
                <MoreHorizontal className="h-4 w-4" />
              </button>
            </div>
            <h3 className="mt-4 text-base font-semibold text-white">
              {ws.name}
            </h3>
            <p className="mt-1 text-xs text-white/40">{ws.description}</p>

            <div className="mt-5 flex items-center justify-between border-t border-white/8 pt-4">
              <div className="flex items-center -space-x-2">
                {Array.from({ length: Math.min(4, ws.members) }).map((_, i) => (
                  <div
                    key={i}
                    className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#0d0a17] bg-gradient-to-br from-white/20 to-white/5 text-[9px] font-semibold text-white"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
                <span className="pl-3 text-xs text-white/40">
                  {ws.members} members
                </span>
              </div>
              <ArrowRight className="h-4 w-4 text-white/25 transition-transform group-hover:translate-x-0.5 group-hover:text-white/60" />
            </div>
          </Card>
        ))}

        <button className="flex min-h-[168px] flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-white/15 text-white/35 transition-colors hover:border-white/30 hover:text-white/60">
          <Plus className="h-6 w-6" />
          <span className="text-sm font-medium">New Workspace</span>
        </button>
      </div>
    </div>
  );
}
