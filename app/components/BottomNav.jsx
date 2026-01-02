"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();

  const itemClass = (path) =>
    `flex flex-col items-center justify-center gap-1 text-xs ${
      pathname === path
        ? "text-blue-600"
        : "text-gray-500"
    }`;

  return (
    // ❗ Mobile only
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t">
      <div className="grid grid-cols-4 h-14">
        <Link href="/" className={itemClass("/")}>
          <span>🏠</span>
          <span>Home</span>
        </Link>

        <Link href="/news" className={itemClass("/news")}>
          <span>📰</span>
          <span>News</span>
        </Link>

        <Link href="/weather" className={itemClass("/weather")}>
          <span>🌦</span>
          <span>Weather</span>
        </Link>

        <Link href="/calendar" className={itemClass("/calendar")}>
          <span>📅</span>
          <span>Calendar</span>
        </Link>
      </div>
    </nav>
  );
}
