import React from "react";

export default function Hero() {
    return (
        <>
            <div className=" bg-[#1a1a19] w-[90%] rounded-2xl mx-auto border-[1.7px] border-[#383837] text-[#7d7d76] mt-5">

                <div className="flex text-[15px] relative bottom-3 w-[100%] px-5">
                    <div className="bg-[#151515] rounded-2xl border-[1.7px] border-[#383837] px-2">2 - Hero</div>

                </div>

                <div className=" flex justify-around">

                    <div className=" w-[45%]">
                        <div className=" font-bold text-[#dad9d6] text-[25px]">Crea el futuro de los videojuegos</div>
                        <div className=" flex flex-col mt-2">
                            <div className=" w-[90%] h-[10px] bg-[#474746] rounded-lg"></div>
                            <div className=" w-[65%] h-[10px] bg-[#474746] rounded-lg mt-2"></div>
                        </div>
                        <div className=" border-2 border-[#383837] mt-3 py-2 w-[30%] text-center font-bold rounded-lg text-[#dad9d6]">Explorar formaciones</div>
                        <div className=" py-4 font-semibold">Sello : Avalado por UTN.BA</div>
                    </div>

                    <div className=" w-[45%] bg-[#151515] border-2 border-dashed rounded-2xl text-center my-4 flex p-auto">
                        <div className=" mx-auto my-auto">Imgen / Ilustracion</div>
                    </div>

                </div>
            </div>
        </>
    )
}