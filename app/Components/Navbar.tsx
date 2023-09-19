"use client" // this is a client component
import React, { useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { RiMoonFill, RiSunLine } from 'react-icons/ri'
import { IoMdMenu, IoMdClose } from 'react-icons/io'

interface NavItem {
    label: string,
    page: string
}

const NAV_ITEMS: Array<NavItem> = [
    {
      label: "Home",
      page: "Home"
    },
    {
      label: "About",
      page: "About"
    },
    {
      label: "Projects",
      page: "Projects"
    },
]

function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);

  return (
    <header className="w-full mx-auto px-4 light:bg-white shadow fixed top-0 z-50 dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="justify-between md:items-center md:flex">
        <div className="flex items-center justify-between py-3">
          <div className="md:py-5 md:block">
            <h2 className="text-2xl font-bold">Nioni Artha Putri</h2>
          </div>
          <div className="md:hidden">
            <button>
              {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} /> }
            </button>
          </div>
        </div>
        <div className="md:flex md:space-x-6">
          {NAV_ITEMS.map(( item, index ) => {
            return <a key={index}>{item.label}</a>
          })}
          {currentTheme === "dark"  ? (
            <button
              onClick={() => setTheme("light")}
              className="bg-slate-100 p-2 rounded-xl"
            >
              <RiSunLine size={25} color="black" />
            </button>
          ) : (
            <button
              onClick={() => setTheme("dark")}
              className="bg-slate-100 p-2 rounded-xl"
            >
              <RiMoonFill size={25} />
            </button>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar