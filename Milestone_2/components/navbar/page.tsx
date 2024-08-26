import React from "react";

const Navbar = () => {
    return (
        <div className="flex justify-between bg-[black] text-white ">
            <h1 className="text-2xl m-[18px] text-[gray] font-black"><i>MR developer💻</i></h1>
                <ul className="flex justify-between gap-[25px] m-[18px] text-xl ">
                    <li className="bg-[gray] rounded p-[5px] hover:scale-105 "><button>Home</button></li>
                    <li className="bg-[gray] rounded p-[5px] hover:scale-105"><button>About</button></li>
                    <li className="bg-[gray] rounded p-[5px] hover:scale-105"><button>Contact</button></li>
                </ul>
        </div>
    )
}

export default Navbar