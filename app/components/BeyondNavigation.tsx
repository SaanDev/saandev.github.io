"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { beyondSections } from "../data/beyond";

export function BeyondNavigation() {
  const pathname = usePathname();
  return <nav className="beyond-navigation" aria-label="Beyond navigation"><div className="container">
    {[{ href: "/beyond", title: "All interests" }, ...beyondSections].map((item) => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>{item.title}</Link>)}
  </div></nav>;
}
