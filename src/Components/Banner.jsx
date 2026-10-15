import React from "react";

export default function Banner_UCAP() {
    return (
        <>
            <div className=" bg-[#1a1a19] w-[90%] rounded-2xl mx-auto border-[1.7px] border-[#383837] text-[#7d7d76] mt-5">

                <div className="flex text-[15px] relative bottom-3 w-[100%] px-5">
                    <div className="bg-[#151515] rounded-2xl border-[1.7px] border-[#383837] px-2">7 - Banner UCAP</div>

                </div>

                <div className=" flex border-2 boder-[#383837] border-dashed rounded-lg w-[90%] ml-10 bg-[#151515] mb-4">

                    <div className="flex w-30 h-13">
                        <div className=" m-auto">Fondo</div>
                    </div>

                    <div className="flex flex-col w-[70%] ml-2">
                        <div className=" w-[90%] h-[10px] bg-[#474746] rounded-lg mt-auto"></div>
                        <div className=" w-[65%] h-[10px] bg-[#474746] rounded-lg mt-2 mb-auto"></div>
                    </div>

                </div>
            </div>
        </>
    )
}