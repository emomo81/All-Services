import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { apps } from "@/lib/data";

export function generateStaticParams() {
  return apps.map((app) => ({ slug: app.slug }));
}

export default async function AppDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const app = apps.find((a) => a.slug === slug);
  if (!app) notFound();

  return (
    <div className="mx-auto max-w-[1400px]">
      <Link
        href="/apps"
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Apps
      </Link>

      <Card className="p-6 sm:p-8">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <div
            className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${app.gradient} shadow-lg`}
          >
            <app.icon className="h-8 w-8 text-white" strokeWidth={2} />
          </div>
          <div className="flex-1">
            <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-white/40">
              {app.category}
            </span>
            <h1 className="mt-2 text-2xl font-bold text-white">{app.name}</h1>
            <p className="mt-1 text-sm text-white/45">{app.description}</p>
          </div>
          <button className="flex items-center gap-2 rounded-xl brand-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20">
            Launch App <ExternalLink className="h-4 w-4" />
          </button>
        </div>
      </Card>

      <Card className="mt-6 p-8 text-center">
        <p className="text-sm text-white/40">
          {`The ${app.name} module workspace is coming soon. This is where you'll manage everything related to ${app.name.toLowerCase()}.`}
        </p>
      </Card>
    </div>
  );
}
