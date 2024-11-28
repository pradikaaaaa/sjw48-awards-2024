'use client'

import { usePathname } from "next/navigation"

const Footer = () => {
    const pathname = usePathname()
    const isVoteFanbase = pathname === '/vote-fanbase'
    const isVoteNominasi = pathname === '/vote-awards'
    const isVotePage = pathname === '/vote/page'

    // console.log('ini pathname ==>', pathname)

    return (
        <footer className={`${isVoteFanbase || isVoteNominasi ? "bg-gradient-to-r from-[#FF5858] to-[#FFC8C8]" : isVotePage ? "bg-gradient-to-r from-[#FF5858] to-[#FFC8C8] to-70%" :"bg-white"} w-full flex items-center justify-center`}>
            <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-center">
                <span className="text-sm text-black">&copy; 2024</span>
            </div>
        </footer>
    )
}

export default Footer