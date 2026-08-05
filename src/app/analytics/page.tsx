import { ArrowUpRight, DollarSign, ShoppingCart, Users, TrendingUp } from "lucide-react";
import { Card, PageHeader } from "@/components/ui/Card";
import SalesOverviewChart from "@/components/charts/SalesOverviewChart";
import DonutChart from "@/components/charts/DonutChart";
import { salesOverview } from "@/lib/data";

const stats = [
  { label: "Total Revenue", value: "$12,540", change: "+18.2%", icon: DollarSign, color: "text-emerald-400 bg-emerald-400/10" },
  { label: "Total Orders", value: "1,234", change: "+13.5%", icon: ShoppingCart, color: "text-blue-400 bg-blue-400/10" },
  { label: "New Customers", value: "256", change: "+13.5%", icon: Users, color: "text-violet-400 bg-violet-400/10" },
  { label: "Total Profit", value: "$4,258", change: "+20.4%", icon: TrendingUp, color: "text-pink-400 bg-pink-400/10" },
];

const categorySales = [
  { name: "Restaurant", value: 40, color: "#8b5cf6" },
  { name: "Pharmacy", value: 20, color: "#38bdf8" },
  { name: "Clinic", value: 20, color: "#34d399" },
  { name: "Others", value: 15, color: "#ec4899" },
];

const topServices = [
  { name: "Restaurant", orders: 567, revenue: "$5,234" },
  { name: "Pharmacy", orders: 345, revenue: "$3,210" },
  { name: "Clinic", orders: 234, revenue: "$2,123" },
  { name: "Consultation", orders: 90, revenue: "$1,973" },
];

const transactions = [
  { desc: "New order #234", source: "Restaurant", time: "2 min ago", amount: "$100.00", positive: true },
  { desc: "Medicine sale #5678", source: "Pharmacy", time: "10 min ago", amount: "$85.50", positive: true },
  { desc: "Consultation #502", source: "Clinic", time: "30 min ago", amount: "$60.00", positive: true },
  { desc: "Refund #112", source: "Restaurant", time: "1 hr ago", amount: "-$25.00", positive: false },
];

export default function AnalyticsPage() {
  return (
    <div className="mx-auto max-w-[1400px]">
      <PageHeader
        title="Analytics"
        subtitle="Performance across every part of your business."
        action={
          <span className="rounded-lg bg-white/5 px-3 py-1.5 text-xs font-medium text-white/50">
            This Month
          </span>
        }
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((s) => (
          <Card key={s.label} className="p-5">
            <div className="flex items-center justify-between">
              <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${s.color}`}>
                <s.icon className="h-5 w-5" strokeWidth={2} />
              </span>
              <span className="flex items-center gap-0.5 text-xs font-semibold text-emerald-400">
                <ArrowUpRight className="h-3.5 w-3.5" /> {s.change}
              </span>
            </div>
            <p className="mt-4 text-2xl font-bold text-white">{s.value}</p>
            <p className="text-xs text-white/40">{s.label}</p>
          </Card>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card className="p-5 xl:col-span-2">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-white">Revenue Overview</h3>
            <span className="rounded-lg bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/45">
              Last 7 days
            </span>
          </div>
          <SalesOverviewChart data={salesOverview} />
        </Card>

        <Card className="p-5">
          <h3 className="mb-1 text-sm font-semibold text-white">
            Sales by Category
          </h3>
          <DonutChart data={categorySales} />
          <div className="mt-2 space-y-2">
            {categorySales.map((c) => (
              <div key={c.name} className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-2 text-white/60">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: c.color }}
                  />
                  {c.name}
                </span>
                <span className="font-medium text-white/80">{c.value}%</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="p-5">
          <h3 className="mb-4 text-sm font-semibold text-white">
            Top Performing Services
          </h3>
          <div className="space-y-4">
            {topServices.map((s) => (
              <div key={s.name}>
                <div className="mb-1.5 flex items-center justify-between text-xs">
                  <span className="font-medium text-white/75">{s.name}</span>
                  <span className="text-white/40">
                    {s.orders} orders · {s.revenue}
                  </span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/8">
                  <div
                    className="h-full rounded-full brand-gradient"
                    style={{ width: `${Math.min(100, (s.orders / 6))}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-5">
          <h3 className="mb-4 text-sm font-semibold text-white">
            Recent Transactions
          </h3>
          <div className="space-y-3">
            {transactions.map((t, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="min-w-0">
                  <p className="truncate text-xs font-medium text-white/80">
                    {t.desc}
                  </p>
                  <p className="text-[11px] text-white/35">
                    {t.source} · {t.time}
                  </p>
                </div>
                <span
                  className={`shrink-0 text-sm font-semibold ${
                    t.positive ? "text-emerald-400" : "text-red-400"
                  }`}
                >
                  {t.amount}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
