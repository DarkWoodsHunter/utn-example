import React from "react";

export default function Footer() {
    return (
        <>
            <div className=" bg-[#1a1a19] w-[90%] h-[100px] rounded-2xl mx-auto border-[1.7px] border-[#383837] text-[#7d7d76] mt-4">

                <div className="flex text-[15px] relative bottom-3 w-[100%] justify-between px-5">
                    <div className="bg-[#151515] rounded-2xl border-[1.7px] border-[#383837] px-2">12 - Comunidad y footer</div>
                </div>

                <div className=" flex justify-between px-10">

                    <div className="flex w-[10%] justify-between">
                        <div className=" bg-[#151515] border-3 border-dotted border-[#383837] px-2 py-2 rounded-lg h-[50px]">
                            IG
                        </div>
                        <div className=" bg-[#151515] border-3 border-dotted border-[#383837] px-2 py-2 rounded-lg h-[50px]">
                            WA
                        </div>
                        <div className=" bg-[#151515] border-3 border-dotted border-[#383837] px-2 py-2 rounded-lg h-[50px]">
                            YT
                        </div>
                    </div>


                    <div className=" flex text-[20px] justify-between w-[25%] text-[#dad9d6]">
                        <div className=" py-2">
                            Contactos
                        </div>
                        .
                        <div className=" py-2">
                            Links
                        </div>
                        .
                        <div className=" py-2">
                            Términos
                        </div>
                    </div>

                    <div className="flex text-[20px] justify-between w-[10%] text-[#dad9d6]">
                        <div className=" py-2">
                            Moneda
                        </div>
                        .
                        <div className=" py-2">
                            2026
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}