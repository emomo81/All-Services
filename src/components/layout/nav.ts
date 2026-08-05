import {
  Home,
  LayoutGrid,
  Layers,
  MessageSquare,
  CalendarDays,
  CheckSquare,
  BarChart3,
  FolderClosed,
  Contact,
  Settings,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
  badge?: number;
}

export const mainNav: NavItem[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "Apps", href: "/apps", icon: LayoutGrid },
  { label: "Workspaces", href: "/workspaces", icon: Layers },
  { label: "Messages", href: "/messages", icon: MessageSquare, badge: 12 },
  { label: "Calendar", href: "/calendar", icon: CalendarDays },
  { label: "Tasks", href: "/tasks", icon: CheckSquare },
  { label: "Analytics", href: "/analytics", icon: BarChart3 },
  { label: "Files", href: "/files", icon: FolderClosed },
  { label: "Contacts", href: "/contacts", icon: Contact },
  { label: "Settings", href: "/settings", icon: Settings },
];

export const dockNav: NavItem[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "Apps", href: "/apps", icon: LayoutGrid },
  { label: "Messages", href: "/messages", icon: MessageSquare, badge: 12 },
  { label: "Calendar", href: "/calendar", icon: CalendarDays },
];

export const dockNavRight: NavItem[] = [
  { label: "Tasks", href: "/tasks", icon: CheckSquare },
  { label: "Files", href: "/files", icon: FolderClosed },
  { label: "Settings", href: "/settings", icon: Settings },
];
