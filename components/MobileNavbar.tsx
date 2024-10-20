"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { sidebarLinks } from "@/constants";

const MobileNavbar = ({ user }: MobileNavProps) => {
  const pathName = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src={"/icons/hamburger.svg"}
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side={"left"} className="border-none bg-white">
          <Link
            href={"/"}
            className="cursor-pointer items-center flex gap-1 px-4"
          >
            <Image
              src={"/icons/logo.svg"}
              alt={"horizon logo"}
              width={34}
              height={34}
            />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
              Horizon
            </h1>
          </Link>

          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex flex-col gap-4 pt-16 text-white">
                {sidebarLinks.map((item) => {
                  const isActive =
                    pathName === item.route ||
                    pathName.startsWith(`${item.route}/`);

                  return (
                    <SheetClose asChild key={item.route}>

                    <Link
                      href={item.route}
                      key={item.label}
                      className={cn(
                        "mobilenav-sheet_close w-full",
                        isActive && "bg-bank-gradient"
                      )}
                    >
                      <div className="relative size-6">
                        <Image
                          src={item.imgURL}
                          alt={item.label}
                          width={20}
                          height={20}
                          className={cn({
                            "brightness-[3] invert-0": isActive,
                          })}
                        />
                      </div>
                      <p
                        className={cn(
                          "text-16 font-semibold text-black-2",
                          isActive && "!text-white"
                        )}
                      >
                        {item.label}
                      </p>
                    </Link>
                    </SheetClose>
                  );
                })}
              </nav>
            </SheetClose>
            FOOTER
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNavbar;
