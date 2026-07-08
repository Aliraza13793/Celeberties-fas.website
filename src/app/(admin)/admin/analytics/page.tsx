import { BarChart3, TrendingUp, Eye, Users, Clock, ArrowUpRight } from "lucide-react";

const STATS = [
  { label: "Total Views", value: "156,789", change: "+18%", icon: Eye, color: "bg-blue-500" },
  { label: "Unique Visitors", value: "89,234", change: "+12%", icon: Users, color: "bg-green-500" },
  { label: "Avg. Time on Page", value: "3:45", change: "+5%", icon: Clock, color: "bg-purple-500" },
  { label: "Bounce Rate", value: "42%", change: "-3%", icon: TrendingUp, color: "bg-rose-500" },
];

const TOP_PAGES = [
  { page: "/", title: "Home", views: 34567, visitors: 18923 },
  { page: "/celebrity-news", title: "Celebrity News", views: 23456, visitors: 12345 },
  { page: "/fashion", title: "Fashion", views: 19876, visitors: 10234 },
  { page: "/red-carpet", title: "Red Carpet", views: 18765, visitors: 9876 },
  { page: "/blog/zendaya-valentino-cannes-2026", title: "Zendaya at Cannes", views: 15432, visitors: 8765 },
];

const TRAFFIC_SOURCES = [
  { source: "Organic Search", percentage: 45, color: "bg-green-500" },
  { source: "Direct", percentage: 25, color: "bg-blue-500" },
  { source: "Social Media", percentage: 20, color: "bg-purple-500" },
  { source: "Referral", percentage: 10, color: "bg-orange-500" },
];

export default function AdminAnalyticsPage() {
  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-600 mt-1">Track your website performance</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {STATS.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                <p className={`text-sm mt-2 flex items-center gap-1 font-medium ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  <ArrowUpRight className="w-4 h-4" />
                  {stat.change}
                </p>
              </div>
              <div className={`p-4 rounded-xl ${stat.color}`}>
                <stat.icon className="w-7 h-7 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Top Pages</h2>
          </div>
          <div className="divide-y divide-gray-100">
            {TOP_PAGES.map((page, i) => (
              <div key={i} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">{page.title}</p>
                    <p className="text-sm text-gray-500 mt-0.5">{page.page}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">{page.views.toLocaleString()}</p>
                    <p className="text-sm text-gray-500">{page.visitors.toLocaleString()} visitors</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Traffic Sources</h2>
          </div>
          <div className="p-6 space-y-5">
            {TRAFFIC_SOURCES.map((source) => (
              <div key={source.source}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-700">{source.source}</span>
                  <span className="text-sm font-bold text-gray-900">{source.percentage}%</span>
                </div>
                <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${source.color}`} style={{ width: `${source.percentage}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
