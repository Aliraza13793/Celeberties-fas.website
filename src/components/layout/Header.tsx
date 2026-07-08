"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 bg-gradient-to-br from-rose-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white text-lg font-bold">CF</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg md:text-xl font-extrabold text-rose-600 tracking-tight">Celebrity</span>
              <span className="text-lg md:text-xl font-extrabold text-gray-900 tracking-tight">Fashion</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-3">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-rose-600 text-white shadow-md"
                      : "text-gray-700 hover:bg-gray-100 hover:text-rose-600"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/admin"
              className="hidden sm:inline-flex items-center px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Admin
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-4 space-y-2">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-rose-600 text-white shadow-md"
                      : "text-gray-700 hover:bg-gray-100 hover:text-rose-600"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/admin"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center px-4 py-3 bg-gray-900 text-white text-sm font-medium rounded-xl hover:bg-gray-800 mt-2"
            >
              Admin Dashboard
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
