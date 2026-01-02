"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const linkClass = (path) =>
    `px-3 py-2 rounded-md text-sm font-medium ${
      pathname === path
        ? "bg-blue-600 text-white"
        : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    // ❗ Desktop only
    <header className="hidden md:block sticky top-0 z-30 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl">📱</span>
          <span className="font-semibold text-lg">PWA Task</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="flex items-center gap-2">
          <Link href="/" className={linkClass("/")}>Home</Link>
          <Link href="/news" className={linkClass("/news")}>News</Link>
          <Link href="/weather" className={linkClass("/weather")}>Weather</Link>
          <Link href="/calendar" className={linkClass("/calendar")}>Calendar</Link>
        </nav>
      </div>
    </header>
  );
}
