"use client";

import { useState } from "react";
import {
  Search,
  Bell,
  MessageCircle,
  ScanLine,
  ChevronDown,
  LogOut,
  UserRound,
  Settings as SettingsIcon,
} from "lucide-react";
import Link from "next/link";

export default function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 flex h-20 items-center gap-4 border-b border-white/8 bg-black/20 px-6 backdrop-blur-2xl lg:pl-10">
      <div className="relative flex-1 max-w-xl">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
        <input
          type="text"
          placeholder="Search anything..."
          className="w-full rounded-xl border border-white/8 bg-white/5 py-2.5 pl-11 pr-16 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-violet-400/40 focus:bg-white/[0.07]"
        />
        <kbd className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 text-[11px] font-medium text-white/35">
          ⌘K
        </kbd>
      </div>

      <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
        <button
          aria-label="Notifications"
          className="relative flex h-10 w-10 items-center justify-center rounded-xl text-white/60 hover:bg-white/8 hover:text-white transition-colors"
        >
          <Bell className="h-[18px] w-[18px]" strokeWidth={2} />
          <span className="absolute right-2 top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-pink-500 px-1 text-[10px] font-bold text-white">
            4
          </span>
        </button>
        <Link
          href="/messages"
          aria-label="Messages"
          className="relative hidden sm:flex h-10 w-10 items-center justify-center rounded-xl text-white/60 hover:bg-white/8 hover:text-white transition-colors"
        >
          <MessageCircle className="h-[18px] w-[18px]" strokeWidth={2} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-emerald-400" />
        </Link>
        <button
          aria-label="Quick scan"
          className="hidden sm:flex h-10 w-10 items-center justify-center rounded-xl text-white/60 hover:bg-white/8 hover:text-white transition-colors"
        >
          <ScanLine className="h-[18px] w-[18px]" strokeWidth={2} />
        </button>

        <div className="relative ml-1">
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex items-center gap-2.5 rounded-xl py-1.5 pl-1.5 pr-2.5 hover:bg-white/8 transition-colors"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-600 text-sm font-bold text-white">
              EM
            </div>
            <span className="hidden text-left md:block">
              <span className="block text-sm font-semibold leading-tight text-white">
                Emmanuel M.
              </span>
              <span className="block text-xs leading-tight text-white/40">
                Administrator
              </span>
            </span>
            <ChevronDown
              className={`hidden h-4 w-4 text-white/40 transition-transform md:block ${
                menuOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {menuOpen ? (
            <>
              <button
                aria-label="Close menu"
                className="fixed inset-0 z-30 cursor-default"
                onClick={() => setMenuOpen(false)}
              />
              <div className="absolute right-0 z-40 mt-2 w-56 overflow-hidden rounded-xl border border-white/10 bg-[#120e1e] shadow-2xl shadow-black/50">
                <Link
                  href="/profile"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-sm text-white/75 hover:bg-white/5 hover:text-white"
                >
                  <UserRound className="h-4 w-4" /> View Profile
                </Link>
                <Link
                  href="/settings"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-sm text-white/75 hover:bg-white/5 hover:text-white"
                >
                  <SettingsIcon className="h-4 w-4" /> Settings
                </Link>
                <div className="h-px bg-white/8" />
                <button className="flex w-full items-center gap-3 px-4 py-3 text-sm text-red-400 hover:bg-white/5">
                  <LogOut className="h-4 w-4" /> Sign Out
                </button>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </header>
  );
}
