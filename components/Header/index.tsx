'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'


const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname();

  const nav_items = [
    { href: "/", label: "Home" },
    { href: "/vote", label: "Vote" },
    { href: "/candidates", label: "Candidates" }
  ]

  return (
    <header className="bg-white border">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            {/* <img
              alt=""
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            /> */}
            <Image
              src="/images/logo/logo-bgwhite.svg"
              alt=""
              width={40}
              height={40}
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">

          {/* <a href="/" className="text-sm/6 font-semibold text-gray-900">
          Home
        </a>
        <a href="#" className="text-sm/6 font-semibold text-gray-900">
          Vote
        </a>
        <a href="/candidates" className="text-sm/6 font-semibold text-gray-900">
          Candidates
        </a> */}
          {
            nav_items.map(({ href, label }) => {
              const isActive = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  className={`${isActive ? "text-blue-500" : "text-black"} text-sm/6 font-semibold`}
                >
                  {label}
                </Link>
              )
            })
          }
        </PopoverGroup>
        {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" className="text-sm/6 font-semibold text-gray-900">
          Log in <span aria-hidden="true">&rarr;</span>
        </a>
      </div> */}
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">SJW48 Awards 2024</span>
              {/* <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              /> */}
              <Image
                src="/images/logo/logo-bgwhite.svg"
                alt=""
                width={40}
                height={40}
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {/* <a
                href="/"
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
              >
                Home
              </a> */}

                {
                  nav_items.map(({ href, label }) => {
                    const isActive = pathname === href
                    return (
                      <Link
                        key={href}
                        href={href}
                        className={`${isActive ? "text-blue-500" : "text-black"} -mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold`}
                      >
                        {label}
                      </Link>
                    )
                  })
                }

              </div>
              {/* <div className="py-6">
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
              >
                Log in
              </a>
            </div> */}
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}

export default Header;