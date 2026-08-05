import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import BottomDock from "./BottomDock";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#06050d]">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-violet-600/25 blur-[120px] animate-float-slow" />
        <div className="absolute top-1/3 -right-40 h-[28rem] w-[28rem] rounded-full bg-blue-500/20 blur-[120px] animate-float-slow" />
        <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-pink-500/15 blur-[120px] animate-float-slow" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <Sidebar />

      <div className="relative lg:pl-64">
        <Topbar />
        <main className="relative z-10 px-4 pb-28 pt-6 sm:px-6 lg:px-10">
          {children}
        </main>
      </div>

      <BottomDock />
    </div>
  );
}
