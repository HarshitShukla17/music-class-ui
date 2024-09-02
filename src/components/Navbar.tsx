'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    
  return (
    <div>
        <div className={cn("fixed top-12 inset-x-0 w-80 ml-10 z-50", className)}>
             <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600"> @..HARSHIT</h2>
        </div>
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
        <Menu setActive={setActive}>
            <Link href={"/"}>
                <MenuItem item="Home" active={active} setActive={setActive}/>   
            </Link>
            <MenuItem item="Our Courses" active={active} setActive={setActive}>
            <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/courses">All Courses</HoveredLink>
                <HoveredLink href="/courses">Basic Music Thery</HoveredLink>
                <HoveredLink href="/courses">Advanced Competition</HoveredLink>
                <HoveredLink href="/courses">Songwriting</HoveredLink>
                <HoveredLink href="/courses">Music Production</HoveredLink>
                
            </div>
            </MenuItem>
            <Link href={"/contact"}>
                <MenuItem item="Contact Us" active={active} setActive={setActive}/>
            </Link>

        </Menu>
    </div>
    </div>
  )
}

export default Navbar
