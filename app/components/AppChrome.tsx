"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function AppChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <>
      {!isAdmin ? <Navbar /> : null}
      <main style={{ flex: 1 }}>{children}</main>
      {!isAdmin ? <Footer /> : null}
    </>
  );
}

