"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

function Header() {
  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, [path]);

  return (
    <div className="flex p-4 items-center justify-between bg-fuchsia-200 shadow-sm">
      <Image src={"/logo.svg"} width={160} height={100} alt="logo" />
      <ul className="hidden md:flex gap-6">
        <li
          className={`hover:text-orange-500 hover:font-bold transition-all cursor-pointer
            ${path === "/dashboard" && "text-orange-500 font-bold"}
          `}
        >
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li
          className={`hover:text-orange-500 hover:font-bold transition-all cursor-pointer
            ${path === "/dashboard/questions" && "text-orange-500 font-bold"}
          `}
        >
          <Link href="/dashboard/questions">Questions</Link>
        </li>
        <li
          className={`hover:text-orange-500 hover:font-bold transition-all cursor-pointer
            ${path === "/dashboard/upgrade" && "text-orange-500 font-bold"}
          `}
        >
          <Link href="/dashboard/upgrade">Upgrade</Link>
        </li>
        <li
          className={`hover:text-orange-500 hover:font-bold transition-all cursor-pointer
            ${path === "/dashboard/how" && "text-orange-500 font-bold"}
          `}
        >
          <Link href="/dashboard/how">How it Works?</Link>
        </li>
      </ul>
      <UserButton />
    </div>
  );
}

export default Header;
