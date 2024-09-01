import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <div className="relative">
            <div className="flex justify-between fixed top-0 left-0 right-0 bg-[black] text-black ">
                <h1 className="sm:text-2xl text:sm sm:m-[18px] m-[12px] text-[gray] font-black"><i>MR developer💻</i></h1>
                    <ul className="flex justify-between sm:gap-[25px] gap-[4px] sm:m-[18px] m-[12px] sm:text-xl text-sm">
                        <li className="bg-[gray] rounded sm:p-[5px] p-[1px] hover:scale-105 "><Link href="/components/navbar" target="_blank"><button>Home</button></Link></li>
                        <li className="bg-[gray] rounded sm:p-[5px] p-[1px] hover:scale-105"><Link href="/components/navbar/home" target="_blank" ><button>About</button></Link></li>
                        <li className="bg-[gray] rounded sm:p-[5px] p-[1px] hover:scale-105"><Link href="/components/navbar/contact"target="_blank" ><button>Contact</button></Link></li>
                    </ul>
            </div>
        </div>
    )
}

export default Navbar