"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

export interface DonutSlice {
  name: string;
  value: number;
  color: string;
}

export default function DonutChart({ data }: { data: DonutSlice[] }) {
  return (
    <ResponsiveContainer width="100%" height={180}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          innerRadius={52}
          outerRadius={78}
          paddingAngle={3}
          stroke="none"
        >
          {data.map((d) => (
            <Cell key={d.name} fill={d.color} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            background: "#151022",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            fontSize: 12,
            color: "#fff",
          }}
          formatter={(value, name) => [`${value}%`, name]}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
