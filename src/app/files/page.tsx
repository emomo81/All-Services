import {
  Upload,
  FolderClosed,
  Image as ImageIcon,
  Video,
  FileText,
  Share2,
  Trash2,
  Archive,
  FileSpreadsheet,
} from "lucide-react";
import { Card } from "@/components/ui/Card";

const sidebarItems = [
  { label: "All Files", icon: FolderClosed, active: true },
  { label: "Documents", icon: FileText },
  { label: "Images", icon: ImageIcon },
  { label: "Videos", icon: Video },
  { label: "Spreadsheets", icon: FileSpreadsheet },
  { label: "Presentations", icon: FileText },
  { label: "Archives", icon: Archive },
  { label: "Shared with me", icon: Share2 },
  { label: "Trash", icon: Trash2 },
];

const files = [
  { name: "Sales Report Q2.pdf", type: "PDF", size: "2.4 MB", modified: "2 hrs ago", color: "text-red-400 bg-red-400/10" },
  { name: "Inventory.xlsx", type: "Excel", size: "1.8 MB", modified: "3 hrs ago", color: "text-emerald-400 bg-emerald-400/10" },
  { name: "Product Images.zip", type: "ZIP", size: "45.2 MB", modified: "5 hrs ago", color: "text-amber-400 bg-amber-400/10" },
  { name: "Presentation.pptx", type: "PPTX", size: "5.6 MB", modified: "Yesterday", color: "text-orange-400 bg-orange-400/10" },
  { name: "Database Backup.sql", type: "SQL", size: "12.4 MB", modified: "Yesterday", color: "text-blue-400 bg-blue-400/10" },
  { name: "Logo.png", type: "PNG", size: "1.2 MB", modified: "2 days ago", color: "text-violet-400 bg-violet-400/10" },
  { name: "Client Contracts.docx", type: "Word", size: "890 KB", modified: "3 days ago", color: "text-sky-400 bg-sky-400/10" },
  { name: "Menu Design.psd", type: "PSD", size: "38.1 MB", modified: "4 days ago", color: "text-indigo-400 bg-indigo-400/10" },
];

export default function FilesPage() {
  return (
    <div className="mx-auto max-w-[1400px]">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white sm:text-3xl">Files</h1>
          <p className="mt-1 text-sm text-white/45">
            All your documents, images and backups in one place.
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-xl brand-gradient px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20">
          <Upload className="h-4 w-4" /> Upload
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[220px_1fr]">
        <Card className="h-fit p-3">
          <div className="space-y-1">
            {sidebarItems.map((item) => (
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
          <div className="mt-4 border-t border-white/8 pt-4 px-1">
            <div className="mb-2 flex justify-between text-[11px] text-white/40">
              <span>Storage</span>
              <span>68.2 / 100 GB</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/8">
              <div className="h-full w-[68%] rounded-full brand-gradient" />
            </div>
          </div>
        </Card>

        <Card className="overflow-hidden">
          <div className="flex items-center gap-1 border-b border-white/8 px-5 pt-4">
            <button className="rounded-t-lg border-b-2 border-violet-400 px-3 pb-3 text-sm font-semibold text-white">
              My Files
            </button>
            <button className="rounded-t-lg px-3 pb-3 text-sm font-medium text-white/40 hover:text-white/70">
              Team Files
            </button>
            <button className="rounded-t-lg px-3 pb-3 text-sm font-medium text-white/40 hover:text-white/70">
              All Files
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr className="text-[11px] uppercase tracking-wider text-white/35">
                  <th className="px-5 py-3 font-medium">Name</th>
                  <th className="px-5 py-3 font-medium">Type</th>
                  <th className="px-5 py-3 font-medium">Size</th>
                  <th className="px-5 py-3 font-medium">Modified</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/6">
                {files.map((f) => (
                  <tr key={f.name} className="transition-colors hover:bg-white/[0.02]">
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${f.color}`}>
                          <FileText className="h-4 w-4" />
                        </span>
                        <span className="font-medium text-white/85">{f.name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3.5 text-white/45">{f.type}</td>
                    <td className="px-5 py-3.5 text-white/45">{f.size}</td>
                    <td className="px-5 py-3.5 text-white/45">{f.modified}</td>
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
