import {
  UtensilsCrossed,
  Pill,
  Stethoscope,
  Building2,
  BarChart3,
  Hotel,
  MessagesSquare,
  DollarSign,
  Users,
  Briefcase,
  Store,
  Globe2,
  type LucideIcon,
} from "lucide-react";

export type AppCategory =
  | "Business"
  | "Health"
  | "Finance"
  | "Hospitality"
  | "Productivity";

export interface AppItem {
  slug: string;
  name: string;
  description: string;
  icon: LucideIcon;
  category: AppCategory;
  gradient: string;
}

export const apps: AppItem[] = [
  {
    slug: "restaurant",
    name: "Restaurant",
    description: "Manage orders, menu & kitchen",
    icon: UtensilsCrossed,
    category: "Hospitality",
    gradient: "from-orange-400 to-amber-600",
  },
  {
    slug: "pharmacy",
    name: "Pharmacy",
    description: "Manage medicines & inventory",
    icon: Pill,
    category: "Health",
    gradient: "from-emerald-400 to-green-600",
  },
  {
    slug: "clinic",
    name: "Clinic",
    description: "Manage patients & appointments",
    icon: Stethoscope,
    category: "Health",
    gradient: "from-cyan-400 to-teal-600",
  },
  {
    slug: "hospital",
    name: "Hospital",
    description: "Full hospital management",
    icon: Building2,
    category: "Health",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    slug: "stocks",
    name: "Stocks",
    description: "Track & analyze investments",
    icon: BarChart3,
    category: "Finance",
    gradient: "from-pink-500 to-fuchsia-600",
  },
  {
    slug: "hostel",
    name: "Hostel",
    description: "Manage rooms & tenants",
    icon: Hotel,
    category: "Hospitality",
    gradient: "from-orange-400 to-red-500",
  },
  {
    slug: "crm",
    name: "CRM",
    description: "Manage customers & leads",
    icon: MessagesSquare,
    category: "Business",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    slug: "accounting",
    name: "Accounting",
    description: "Invoices, expenses & reports",
    icon: DollarSign,
    category: "Finance",
    gradient: "from-emerald-400 to-teal-600",
  },
  {
    slug: "hrm",
    name: "HRM",
    description: "Manage employees & payroll",
    icon: Users,
    category: "Business",
    gradient: "from-orange-400 to-amber-600",
  },
  {
    slug: "project",
    name: "Project",
    description: "Tasks & project management",
    icon: Briefcase,
    category: "Productivity",
    gradient: "from-blue-400 to-sky-600",
  },
  {
    slug: "pos",
    name: "POS",
    description: "Point of sale system",
    icon: Store,
    category: "Business",
    gradient: "from-green-400 to-emerald-600",
  },
  {
    slug: "website",
    name: "Website",
    description: "Build & manage website",
    icon: Globe2,
    category: "Productivity",
    gradient: "from-violet-500 to-indigo-600",
  },
];

export const appCategories: AppCategory[] = [
  "Business",
  "Health",
  "Finance",
  "Hospitality",
  "Productivity",
];

export interface Workspace {
  name: string;
  description: string;
  members: number;
  icon: LucideIcon;
  gradient: string;
}

export const workspaces: Workspace[] = [
  {
    name: "My Workspace",
    description: "Personal workspace",
    members: 12,
    icon: Briefcase,
    gradient: "from-violet-500 to-purple-600",
  },
  {
    name: "Business Management",
    description: "Manage all business operations",
    members: 8,
    icon: Store,
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    name: "Health Services",
    description: "Clinics and Hospitals",
    members: 6,
    icon: Stethoscope,
    gradient: "from-emerald-400 to-teal-600",
  },
  {
    name: "Finance & Accounting",
    description: "Billing, accounting & reports",
    members: 7,
    icon: DollarSign,
    gradient: "from-green-400 to-emerald-600",
  },
  {
    name: "Hospitality Management",
    description: "Hotels, Hostel & Restaurant",
    members: 5,
    icon: Hotel,
    gradient: "from-orange-400 to-red-500",
  },
  {
    name: "Team Collaboration",
    description: "Projects and team tasks",
    members: 9,
    icon: Users,
    gradient: "from-pink-500 to-fuchsia-600",
  },
];

export interface Activity {
  title: string;
  subtitle: string;
  time: string;
  icon: LucideIcon;
  color: string;
}

export const recentActivities: Activity[] = [
  {
    title: "New order received",
    subtitle: "Restaurant",
    time: "2 min ago",
    icon: UtensilsCrossed,
    color: "text-orange-400 bg-orange-400/10",
  },
  {
    title: "Medicine low in stock",
    subtitle: "Pharmacy",
    time: "15 min ago",
    icon: Pill,
    color: "text-emerald-400 bg-emerald-400/10",
  },
  {
    title: "Appointment scheduled",
    subtitle: "Clinic",
    time: "30 min ago",
    icon: Stethoscope,
    color: "text-cyan-400 bg-cyan-400/10",
  },
  {
    title: "Payment received",
    subtitle: "Accounting",
    time: "1 hr ago",
    icon: DollarSign,
    color: "text-green-400 bg-green-400/10",
  },
];

export interface TaskItem {
  title: string;
  project: string;
  projectColor: string;
  due: string;
  priority?: "High" | "Medium" | "Low";
  status?: "Pending" | "Today" | "Tomorrow" | "Done";
  done?: boolean;
}

export const myTasks: TaskItem[] = [
  { title: "Update stock inventory", project: "Pharmacy", projectColor: "text-emerald-400 bg-emerald-400/10", due: "Today" },
  { title: "Follow up with client", project: "CRM", projectColor: "text-violet-400 bg-violet-400/10", due: "Today" },
  { title: "Check pending orders", project: "Restaurant", projectColor: "text-orange-400 bg-orange-400/10", due: "Tomorrow" },
  { title: "Prepare monthly report", project: "Accounting", projectColor: "text-green-400 bg-green-400/10", due: "Jul 25" },
];

export const systemStatus = [
  { name: "Restaurant", icon: UtensilsCrossed, color: "text-orange-400 bg-orange-400/10", status: "Operational" },
  { name: "Pharmacy", icon: Pill, color: "text-emerald-400 bg-emerald-400/10", status: "Operational" },
  { name: "Clinic", icon: Stethoscope, color: "text-cyan-400 bg-cyan-400/10", status: "Operational" },
  { name: "Hospital", icon: Building2, color: "text-blue-400 bg-blue-400/10", status: "Operational" },
];

export const salesOverview = [
  { day: "Mon", value: 3.2 },
  { day: "Tue", value: 4.1 },
  { day: "Wed", value: 3.6 },
  { day: "Thu", value: 5.4 },
  { day: "Fri", value: 4.8 },
  { day: "Sat", value: 6.9 },
  { day: "Sun", value: 5.9 },
];

export const quickActions = [
  { label: "Create Invoice", icon: DollarSign, color: "text-blue-400 bg-blue-400/10" },
  { label: "Add New Product", icon: Store, color: "text-orange-400 bg-orange-400/10" },
  { label: "Schedule Appointment", icon: Stethoscope, color: "text-pink-400 bg-pink-400/10" },
  { label: "New Stock Entry", icon: Pill, color: "text-emerald-400 bg-emerald-400/10" },
  { label: "New Tasks", icon: Briefcase, color: "text-violet-400 bg-violet-400/10" },
];
