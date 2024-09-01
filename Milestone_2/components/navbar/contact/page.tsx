import React from "react";

const Contact = () => {
    return (
        <div className="absolute sm:-bottom-44 xs:-bottom-[200%]  left-[60%] xs:hidden sm:block hidden">
            <h1 className="font-bold text-2xl underline underline-offset-4 font-serif">Contacts:</h1>
            <br />
            <a href="https://www.linkedin.com/in/malia-raees-khan/" target="_blank">
                <div className="flex items-center">
                    <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" className="w-[35px]" />
                    <p className="ml-2">Linked In</p>
                </div>
            </a>
            <a href="https://github.com/MaliaRK" target="_blank">
                <div className="flex items-center mt-[20px] ">
                    <img src="https://cdn-icons-png.flaticon.com/128/2504/2504911.png" className="w-[35px]" />
                    <p className="ml-2">Github</p>
                </div>
            </a>
            <a href="mailto:maliaraeeskhan@gmail.com">
                <div className="flex items-center mt-[20px] ">
                    <img src="https://cdn-icons-png.flaticon.com/128/3062/3062634.png" className="w-[35px]" />
                    <p className="ml-2">Email</p>
                </div>
            </a>
        </div>
    )
}

export default Contact