import {
  LayoutDashboard,
  Users,
  BadgeCheck,
  Building2,
  Clock,
  CalendarDays,
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
    text: "Employees",
    route: "/admin/employees",
    icon: BadgeCheck,
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