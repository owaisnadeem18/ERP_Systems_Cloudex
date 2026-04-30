import {
  LayoutDashboard,
  Users,
  Globe,      
  UserCheck,
  Building2,
  Clock,
  CalendarDays,
  LogOut,
} from "lucide-react";

export const headerItems = [
  {
    text: "Dashboard",
    route: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    text: "Users",
    route: "/admin/users",
    icon: Users,
  },
  {
    text: "Tenants",
    route: "/admin/tenants",
    icon: Globe,
  },
  {
    text: "Employees",
    route: "/admin/employees",
    icon: UserCheck,
  },
  {
    text: "Departments",
    route: "/admin/departments",
    icon: Building2,
  },
  {
    text: "Attendance",
    route: "/admin/attendance",
    icon: Clock,
  },
  {
    text: "Leaves",
    route: "/admin/leaves",
    icon: CalendarDays,
  },
];

export const footerItems = [
  {
    text: "Logout",
    route: "/login",
    icon: LogOut,
  },
];