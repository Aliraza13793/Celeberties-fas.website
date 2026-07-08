import {
  FileText,
  Eye,
  MessageSquare,
  Users,
  TrendingUp,
} from "lucide-react";

const STATS = [
  { label: "Total Posts", value: "248", change: "+12%", icon: FileText, color: "bg-blue-500" },
  { label: "Total Views", value: "156.7K", change: "+18%", icon: Eye, color: "bg-green-500" },
  { label: "Comments", value: "1,847", change: "+24%", icon: MessageSquare, color: "bg-purple-500" },
  { label: "Subscribers", value: "12.3K", change: "+8%", icon: Users, color: "bg-rose-500" },
];

export default function AdminDashboard() {
  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome back! Here&apos;s what&apos;s happening.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {STATS.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                <p className="text-sm text-green-600 mt-2 flex items-center gap-1 font-medium">
                  <TrendingUp className="w-4 h-4" /> {stat.change}
                </p>
              </div>
              <div className={`p-4 rounded-xl ${stat.color}`}>
                <stat.icon className="w-7 h-7 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Contact Form Messages</h2>
        <p className="text-gray-600 mb-4">All contact form submissions are sent directly to your email.</p>
        <p className="text-sm text-gray-500">Email: <span className="font-semibold text-rose-600">razaali13793@gmail.com</span></p>
      </div>
    </div>
  );
}
