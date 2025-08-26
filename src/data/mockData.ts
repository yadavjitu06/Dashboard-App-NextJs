//  Users
export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive";
  lastLogin: string;
}

export const mockUsers: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
    status: "active",
    lastLogin: "2023-04-15T10:30:00Z",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "Editor",
    status: "active",
    lastLogin: "2023-04-14T15:45:00Z",
  },
  {
    id: 3,
    name: "Robert Johnson",
    email: "robert.j@example.com",
    role: "Viewer",
    status: "inactive",
    lastLogin: "2023-04-10T09:15:00Z",
  },
  {
    id: 4,
    name: "Sarah Williams",
    email: "sarah.w@example.com",
    role: "Editor",
    status: "active",
    lastLogin: "2023-04-13T14:20:00Z",
  },
  {
    id: 5,
    name: "Michael Brown",
    email: "michael.b@example.com",
    role: "Admin",
    status: "active",
    lastLogin: "2023-04-12T11:05:00Z",
  },
  {
    id: 6,
    name: "Emily Davis",
    email: "emily.d@example.com",
    role: "Viewer",
    status: "active",
    lastLogin: "2023-04-11T16:10:00Z",
  },
  {
    id: 7,
    name: "David Wilson",
    email: "david.w@example.com",
    role: "Editor",
    status: "inactive",
    lastLogin: "2023-04-09T08:45:00Z",
  },
  {
    id: 8,
    name: "Sophia Martinez",
    email: "sophia.m@example.com",
    role: "Admin",
    status: "active",
    lastLogin: "2023-04-08T13:50:00Z",
  },
];

//  Chart Data
export interface ChartData {
  name: string;
  value: number;
}

export const mockChartData: ChartData[] = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 500 },
  { name: "Jun", value: 900 },
  { name: "july", value: 500 },
  { name: "August", value: 900 },
  { name: "September", value: 500 },
  { name: "october", value: 900 },
  { name: "November", value: 900 },
  { name: "December", value: 900 },
];

export interface RevenueData {
  source: string;
  amount: number;
}

export const mockRevenueData: RevenueData[] = [
  { source: "Product Sales", amount: 1500 },
  { source: "Subscription Plans", amount: 2500 },
  { source: "Affiliate Marketing", amount: 6000 },
  { source: "Advertisements", amount: 5500 },
  { source: "Services & Consulting", amount: 6500 },
  { source: "Licensing", amount: 4000 },
  { source: "Other Income", amount: 2500 },
];
// Calendar Events
export interface CalendarEvent {
  date: Date;
  title: string;
}

export const mockEvents: CalendarEvent[] = [
  { date: new Date(2023, 3, 15), title: "Team Meeting" },
  { date: new Date(2023, 3, 18), title: "Product Launch" },
  { date: new Date(2023, 3, 22), title: "Client Call" },
  { date: new Date(2023, 3, 25), title: "Strategy Session" },
  { date: new Date(2023, 3, 28), title: "Quarterly Review" },
  { date: new Date(2023, 4, 5), title: "Board Presentation" },
  { date: new Date(2023, 4, 10), title: "Hackathon" },
  { date: new Date(2025, 8, 25), title: "Project Deadline" },
];
// KPI Cards
export interface KPIData {
  id: number;
  title: string;
  value: number | string;
  icon: string;
  change: number;
}

export const mockKPIData: KPIData[] = [
  {
    id: 1,
    title: "Total Users",
    value: 2543,
    icon: "👥",
    change: 12.5,
  },
  {
    id: 2,
    title: "Revenue",
    value: "$45,231",
    icon: "💰",
    change: 8.2,
  },
  {
    id: 3,
    title: "Orders",
    value: 1423,
    icon: "📦",
    change: -3.1,
  },
  {
    id: 4,
    title: "New Signups",
    value: 320,
    icon: "📝",
    change: 5.6,
  },
  {
    id: 5,
    title: "Active Subscriptions",
    value: 1120,
    icon: "🔑",
    change: 7.4,
  },
  {
    id: 6,
    title: "Customer Satisfaction",
    value: "92%",
    icon: "⭐",
    change: 2.1,
  },
];
