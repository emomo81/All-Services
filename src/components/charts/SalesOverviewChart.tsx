"use client";

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  Tooltip,
  YAxis,
} from "recharts";

export default function SalesOverviewChart({
  data,
}: {
  data: { day: string; value: number }[];
}) {
  return (
    <ResponsiveContainer width="100%" height={140}>
      <AreaChart data={data} margin={{ top: 8, right: 4, left: 4, bottom: 0 }}>
        <defs>
          <linearGradient id="salesFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.45} />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "rgba(255,255,255,0.35)", fontSize: 11 }}
        />
        <YAxis hide domain={["dataMin - 1", "dataMax + 1"]} />
        <Tooltip
          cursor={{ stroke: "rgba(255,255,255,0.15)" }}
          contentStyle={{
            background: "#151022",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            fontSize: 12,
            color: "#fff",
          }}
          labelStyle={{ color: "rgba(255,255,255,0.5)" }}
          formatter={(value) => [`$${value}k`, "Sales"]}
        />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#a78bfa"
          strokeWidth={2.5}
          fill="url(#salesFill)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
