import {
  UserRound,
  Sliders,
  Bell,
  ShieldCheck,
  CreditCard,
  Plug,
  Palette,
  Globe,
  DatabaseBackup,
} from "lucide-react";
import { Card } from "@/components/ui/Card";

const settingsNav = [
  { label: "Profile", icon: UserRound, active: true },
  { label: "General", icon: Sliders },
  { label: "Notifications", icon: Bell },
  { label: "Security", icon: ShieldCheck },
  { label: "Billing", icon: CreditCard },
  { label: "Integrations", icon: Plug },
  { label: "Appearance", icon: Palette },
  { label: "Language", icon: Globe },
  { label: "Backup", icon: DatabaseBackup },
];

function Field({
  label,
  defaultValue,
  type = "text",
}: {
  label: string;
  defaultValue: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-white/45">
        {label}
      </span>
      <input
        type={type}
        defaultValue={defaultValue}
        className="w-full rounded-xl border border-white/8 bg-white/5 px-4 py-2.5 text-sm text-white outline-none focus:border-violet-400/40"
      />
    </label>
  );
}

export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-[1400px]">
      <h1 className="mb-6 text-2xl font-bold text-white sm:text-3xl">
        Settings
      </h1>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[220px_1fr]">
        <Card className="h-fit p-3">
          <div className="space-y-1">
            {settingsNav.map((item) => (
              <button
                key={item.label}
                className={`flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors ${
                  item.active
                    ? "bg-violet-500/15 text-violet-300"
                    : "text-white/50 hover:bg-white/5 hover:text-white/85"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </button>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="mb-6 text-base font-semibold text-white">
            Profile Settings
          </h3>

          <div className="mb-8 flex items-center gap-5">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-600 text-xl font-bold text-white">
              EM
            </div>
            <div>
              <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10">
                Change Photo
              </button>
              <p className="mt-2 text-[11px] text-white/35">
                JPG, PNG or GIF. Max size 2MB.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Full Name" defaultValue="Emmanuel M." />
            <Field
              label="Email"
              defaultValue="emmanuel@unios.com"
              type="email"
            />
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-white/45">
                Role
              </span>
              <select
                defaultValue="Administrator"
                className="w-full rounded-xl border border-white/8 bg-white/5 px-4 py-2.5 text-sm text-white outline-none focus:border-violet-400/40"
              >
                <option className="bg-[#120e1e]">Administrator</option>
                <option className="bg-[#120e1e]">Manager</option>
                <option className="bg-[#120e1e]">Staff</option>
              </select>
            </label>
            <Field label="Phone" defaultValue="+250 788 123 456" />
            <div className="sm:col-span-2">
              <Field label="Location" defaultValue="Kigali, Rwanda" />
            </div>
          </div>

          <button className="mt-8 w-full rounded-xl brand-gradient py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 sm:w-auto sm:px-8">
            Save Changes
          </button>
        </Card>
      </div>
    </div>
  );
}
