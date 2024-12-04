"use client";

import Image from "next/image";
import { useState } from "react";

import logo from "@/public/images/logo/logo-bgwhite.svg";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { NavItem } from "@/types/nav_item";


const navItems: NavItem[] = [
  {
    label: "HOME",
    link: "/",
  },
  {
    label: "VOTE",
    link: "#",
    children: [
      {
        label: "TERFAVORIT",
        link: "/vote-awards"
      },
      {
        label: "FANBASE PILIHAN PEMIRSA",
        link: "/vote-fanbase"
      },
    ]
  },
  {
    label: "NOMINASI",
    link: "#",
    children: [
      {
        label: "TERFAVORIT",
        link: "/kategori?tipe=terfavorit"
      },
      {
        label: "OF THE YEAR",
        link: "/kategori?tipe=of-the-year"
      },
      {
        label: "FANBASE PILIHAN PEMIRSA",
        link: "/candidates"
      }
    ]
  }
];

export default function Header() {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenue] = useState(false);
  function openSideMenu() {
    setSideMenue(true);
  }
  function closeSideMenu() {
    setSideMenue(false);
  }

  return (
    <div className="relative z-10 mx-auto flex w-full justify-between px-4 py-5 text-sm border bg-white">
      {/* left side  */}
      <section ref={animationParent} className="flex items-center mx-6 gap-10">
        {/* logo */}
        <Image src={logo} alt="sjw48" width={40} height={40} />
        {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
      </section>

      {/* right side data */}
      <section className="hidden md:flex items-center gap-8 ">
        {/* navitems */}
        <div className="hidden md:flex items-center gap-4 transition-all">
          {navItems.map((d, i) => (
            <Link
              key={i}
              href={d.link ?? "#"}
              className="relative group  px-2 py-3 transition-all "
            >
              <p className="flex cursor-pointer items-center gap-2 group-hover:text-black font-bold">
                <span>{d.label}</span>
                {d.children && (
                  <IoIosArrowDown className=" transition-all group-hover:rotate-0" />
                )}
              </p>

              {/* dropdown */}
              {d.children && (
                <div className="absolute   right-0   top-10 hidden w-auto  flex-col gap-1   rounded-lg bg-white py-3 shadow-md  transition-all group-hover:flex ">
                  {d.children.map((ch, i) => (
                    <Link
                      key={i}
                      href={ch.link ?? "#"}
                      className="flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black  "
                    >
                      {/* item */}
                      <span className="whitespace-nowrap   pl-3 ">
                        {ch.label}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      </section>

      <FiMenu
        onClick={openSideMenu}
        className="cursor-pointer text-4xl md:hidden"
      />
    </div>
  );
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
      <div className=" h-full w-[65%] bg-white px-4 py-4">
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl "
          />
        </section>
        <div className=" flex flex-col text-base  gap-2 transition-all">
          {navItems.map((d, i) => (
            <SingleNavItem
              key={i}
              label={d.label}
              link={d.link}
            >
              {d.children}
            </SingleNavItem>
          ))}
        </div>

        {/* <section className="  flex  flex-col   gap-8  mt-4 items-center">
          <button className="h-fit text-neutral-400 transition-all hover:text-black/90">
            Login
          </button>

          <button className="w-full  max-w-[200px]  rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90">
            Register
          </button>
        </section> */}
      </div>
    </div>
  );
}

function SingleNavItem(d: NavItem) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItem] = useState(false);

  function toggleItem() {
    return setItem(!isItemOpen);
  }

  return (
    <Link
      ref={animationParent}
      onClick={toggleItem}
      href={d.link ?? "#"}
      className="relative   px-2 py-3 transition-all "
    >
      <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black ">
        <span>{d.label}</span>
        {d.children && (
          // rotate-180
          <IoIosArrowDown
            className={`text-xs transition-all  ${isItemOpen && " rotate-180"}`}
          />
        )}
      </p>

      {/* dropdown */}
      {isItemOpen && d.children && (
        <div className="  w-auto  flex-col gap-1   rounded-lg bg-white py-3   transition-all flex ">
          {d.children.map((ch, i) => (
            <Link
              key={i}
              href={ch.link ?? "#"}
              className=" flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black  "
            >
              {/* item */}
              <span className="whitespace-nowrap   pl-3 ">{ch.label}</span>
            </Link>
          ))}
        </div>
      )}
    </Link>
  );
}