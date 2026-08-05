import { Plus, Users, Building2, Handshake, UserRound, Stethoscope, Phone, Mail } from "lucide-react";
import { Card } from "@/components/ui/Card";

const sidebarItems = [
  { label: "All Contacts", icon: Users, active: true, count: 128 },
  { label: "Clients", icon: UserRound, count: 64 },
  { label: "Suppliers", icon: Building2, count: 22 },
  { label: "Partners", icon: Handshake, count: 9 },
  { label: "Employees", icon: Users, count: 27 },
  { label: "Doctors", icon: Stethoscope, count: 6 },
];

const contacts = [
  { name: "John Doe", email: "john@email.com", phone: "+250 788 123 456", company: "ABC Ltd" },
  { name: "Jane Smith", email: "jane@email.com", phone: "+250 788 234 567", company: "XYZ Co" },
  { name: "Dr. Michael Brown", email: "michael@clinic.com", phone: "+250 788 345 678", company: "City Clinic" },
  { name: "Sarah Johnson", email: "sarah@pharmacy.com", phone: "+250 788 456 789", company: "Health Plus" },
  { name: "Robert Wilson", email: "robert@restaurant.com", phone: "+250 788 567 890", company: "Good Food" },
  { name: "Emily Davis", email: "emily@hostel.com", phone: "+250 788 678 901", company: "Comfort Inn" },
];

export default function ContactsPage() {
  return (
    <div className="mx-auto max-w-[1400px]">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white sm:text-3xl">
            Contacts
          </h1>
          <p className="mt-1 text-sm text-white/45">
            Everyone you do business with, in one directory.
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-xl brand-gradient px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20">
          <Plus className="h-4 w-4" /> Add Contact
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[220px_1fr]">
        <Card className="h-fit p-3">
          <div className="space-y-1">
            {sidebarItems.map((item) => (
              <button
                key={item.label}
                className={`flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors ${
                  item.active
                    ? "bg-violet-500/15 text-violet-300"
                    : "text-white/50 hover:bg-white/5 hover:text-white/85"
                }`}
              >
                <span className="flex items-center gap-3">
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </span>
                <span className="text-xs text-white/30">{item.count}</span>
              </button>
            ))}
          </div>
        </Card>

        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-left text-sm">
              <thead>
                <tr className="text-[11px] uppercase tracking-wider text-white/35">
                  <th className="px-5 py-3 font-medium">Name</th>
                  <th className="px-5 py-3 font-medium">Email</th>
                  <th className="px-5 py-3 font-medium">Phone</th>
                  <th className="px-5 py-3 font-medium">Company</th>
                  <th className="px-5 py-3 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/6">
                {contacts.map((c) => (
                  <tr key={c.name} className="transition-colors hover:bg-white/[0.02]">
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-600 text-[10px] font-bold text-white">
                          {c.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                        </div>
                        <span className="font-medium text-white/85">{c.name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3.5 text-white/45">{c.email}</td>
                    <td className="px-5 py-3.5 text-white/45">{c.phone}</td>
                    <td className="px-5 py-3.5 text-white/45">{c.company}</td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center justify-end gap-1">
                        <button className="flex h-8 w-8 items-center justify-center rounded-lg text-white/40 hover:bg-white/8 hover:text-white">
                          <Phone className="h-3.5 w-3.5" />
                        </button>
                        <button className="flex h-8 w-8 items-center justify-center rounded-lg text-white/40 hover:bg-white/8 hover:text-white">
                          <Mail className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
