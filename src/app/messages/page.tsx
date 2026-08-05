import { Search, Send, Paperclip, Smile, Phone, Video } from "lucide-react";
import { Card } from "@/components/ui/Card";

const conversations = [
  {
    name: "John Doe",
    preview: "Yes, delivery will be between 2-4 PM",
    time: "2 min ago",
    unread: 2,
    online: true,
    active: true,
  },
  {
    name: "Pharmacy Team",
    preview: "Monthly stock update",
    time: "15 min ago",
    unread: 0,
    online: true,
  },
  {
    name: "Clinic Support",
    preview: "Appointment reminder",
    time: "30 min ago",
    unread: 1,
    online: false,
  },
  {
    name: "Accounting Team",
    preview: "Monthly report ready",
    time: "1 hr ago",
    unread: 0,
    online: false,
  },
  {
    name: "Restaurant Team",
    preview: "New menu items added",
    time: "2 hr ago",
    unread: 0,
    online: true,
  },
  {
    name: "System Alerts",
    preview: "Server backup completed",
    time: "3 hr ago",
    unread: 0,
    online: false,
  },
];

const thread = [
  { from: "them", text: "Hi Emmanuel, I placed a new order.", time: "9:12 AM" },
  { from: "me", text: "Hello John! Thanks for your order.", time: "9:14 AM" },
  { from: "them", text: "Can you confirm the delivery time?", time: "9:15 AM" },
  { from: "me", text: "Yes, delivery will be between 2-4 PM", time: "9:16 AM" },
];

export default function MessagesPage() {
  return (
    <div className="mx-auto max-w-[1400px]">
      <h1 className="mb-6 text-2xl font-bold text-white sm:text-3xl">
        Messages
      </h1>

      <Card className="grid grid-cols-1 overflow-hidden md:grid-cols-[300px_1fr] md:h-[calc(100vh-13rem)]">
        <div className="flex flex-col border-b border-white/8 md:border-b-0 md:border-r">
          <div className="p-4">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
              <input
                type="text"
                placeholder="Search messages..."
                className="w-full rounded-xl border border-white/8 bg-white/5 py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-white/35 outline-none focus:border-violet-400/40"
              />
            </div>
          </div>
          <div className="flex-1 space-y-0.5 overflow-y-auto px-2 pb-2 md:max-h-none max-h-80">
            {conversations.map((c) => (
              <button
                key={c.name}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors ${
                  c.active ? "bg-white/8" : "hover:bg-white/5"
                }`}
              >
                <div className="relative shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-600 text-xs font-bold text-white">
                    {c.name
                      .split(" ")
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  {c.online ? (
                    <span className="absolute -right-0.5 -bottom-0.5 h-3 w-3 rounded-full border-2 border-[#0d0a17] bg-emerald-400" />
                  ) : null}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="truncate text-sm font-semibold text-white">
                      {c.name}
                    </p>
                    <span className="shrink-0 text-[10px] text-white/35">
                      {c.time}
                    </span>
                  </div>
                  <p className="truncate text-xs text-white/40">{c.preview}</p>
                </div>
                {c.unread ? (
                  <span className="flex h-5 min-w-5 shrink-0 items-center justify-center rounded-full bg-violet-500 px-1 text-[10px] font-bold text-white">
                    {c.unread}
                  </span>
                ) : null}
              </button>
            ))}
          </div>
        </div>

        <div className="flex min-h-[28rem] flex-col">
          <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-600 text-xs font-bold text-white">
                JD
              </div>
              <div>
                <p className="text-sm font-semibold text-white">John Doe</p>
                <p className="text-[11px] text-emerald-400">Online</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button className="flex h-9 w-9 items-center justify-center rounded-xl text-white/50 hover:bg-white/8 hover:text-white">
                <Phone className="h-4 w-4" />
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded-xl text-white/50 hover:bg-white/8 hover:text-white">
                <Video className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-5">
            {thread.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.from === "me" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs rounded-2xl px-4 py-2.5 text-sm sm:max-w-sm ${
                    m.from === "me"
                      ? "brand-gradient text-white"
                      : "bg-white/8 text-white/85"
                  }`}
                >
                  <p>{m.text}</p>
                  <p
                    className={`mt-1 text-[10px] ${
                      m.from === "me" ? "text-white/70" : "text-white/35"
                    }`}
                  >
                    {m.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 border-t border-white/8 p-4">
            <button className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-white/40 hover:bg-white/8 hover:text-white/70">
              <Paperclip className="h-4 w-4" />
            </button>
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 rounded-xl border border-white/8 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/35 outline-none focus:border-violet-400/40"
            />
            <button className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-white/40 hover:bg-white/8 hover:text-white/70">
              <Smile className="h-4 w-4" />
            </button>
            <button className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl brand-gradient text-white shadow-md shadow-violet-500/20">
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}
