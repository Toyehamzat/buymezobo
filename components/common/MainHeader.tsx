import { useInterface } from "@/store/InterfaceStore"
import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { Button } from "../ui/button";
import useIsMobile from "@/hooks/useIsMobile";
import { HiMenu } from "react-icons/hi";

export default function MainHeader() {
    const { onOpen } = useInterface()
    const isMobile = useIsMobile()

    const openMenu = () => {
        onOpen("searchCreators")
    }

    const openSide = () => {
        onOpen("sideMenuNavigation")
    }

    return (
        <div className="navbar bg-white  lg:max-w-[95%] mx-auto">
            <div className="navbar-start ">
                {
                    isMobile ? (
                        <HiMenu className="text-2xl" onClick={openSide} />
                    ) : (
                        <div className="flex items-center gap-8">
                            <a className="text-base font-semibold tracking-tight" >FAQ</a>
                            <a className="text-base font-semibold tracking-tight" >About</a>
                            <a className="text-base font-semibold tracking-tight" >Resources</a>
                        </div>
                    )
                }
            </div>
            <div className="navbar-center hidden lg:flex">
                <a className="btn btn-ghost text-2xl">BuyMeZobo</a>
            </div>
            <div className="navbar-end flex gap-3">
                <div onClick={openMenu} className='hidden xl:flex gap-1 items-center justify-start p-2 rounded-lg bg-zinc-100 '>
                    <IoMdSearch className="text-xl" />
                    <input onClick={openMenu} type='text' placeholder='Search Creators' className='focus:outline-none flex-1 bg-transparent text-sm font-semibold placeholder-zinc-700' />
                </div>
                <Button variant={"secondary"} className="text-sm lg:text-base font-semibold tracking-tight" >Login</Button>
                <Button className="rounded-lg text-sm lg:text-base font-semibold tracking-tight">Sign up</Button>
            </div>
        </div>
    )

}

