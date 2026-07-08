"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  Tag,
  FolderOpen,
  Image,
  MessageSquare,
  Search,
  BarChart3,
  Mail,
  Megaphone,
  Settings,
  Menu,
  X,
  Bell,
  LogOut,
} from "lucide-react";

const ADMIN_NAV = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Posts", href: "/admin/posts", icon: FileText },
  { label: "Categories", href: "/admin/categories", icon: FolderOpen },
  { label: "Tags", href: "/admin/tags", icon: Tag },
  { label: "Media", href: "/admin/media", icon: Image },
  { label: "Comments", href: "/admin/comments", icon: MessageSquare },
  { label: "SEO", href: "/admin/seo", icon: Search },
  { label: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { label: "Newsletter", href: "/admin/newsletter", icon: Mail },
  { label: "Ads", href: "/admin/ads", icon: Megaphone },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar - always visible on desktop, toggle on mobile */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-72 bg-gray-900 text-white overflow-y-auto lg:static lg:z-auto lg:h-auto lg:min-h-screen ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } transition-transform duration-300`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between p-5 border-b border-gray-800">
          <Link href="/admin" className="flex items-center gap-3 no-underline">
            <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-base font-bold">CF</span>
            </div>
            <span className="text-lg font-bold text-white">Admin Panel</span>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-1.5 hover:bg-gray-800 rounded-lg"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1">
          {ADMIN_NAV.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold no-underline transition-colors ${
                  isActive
                    ? "bg-rose-600 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <item.icon className="w-5 h-5 shrink-0" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Back to site */}
        <div className="p-4 border-t border-gray-800 mt-auto">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold text-gray-300 hover:bg-gray-800 hover:text-white no-underline transition-colors"
          >
            <LogOut className="w-5 h-5 shrink-0" />
            <span>Back to Site</span>
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 min-w-0">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-sm">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
          <div className="hidden lg:block">
            <h2 className="text-xl font-bold text-gray-900">Welcome, Admin</h2>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2.5 hover:bg-gray-100 rounded-lg">
              <Bell className="w-6 h-6 text-gray-600" />
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-rose-500 rounded-full" />
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
              <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                <span className="text-base font-bold text-rose-600">A</span>
              </div>
              <span className="text-base font-semibold text-gray-700 hidden sm:block">Admin</span>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}
