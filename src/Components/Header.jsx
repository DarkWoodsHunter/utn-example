import React from "react";

export default function Header() {
    return (
        <>
            <div className=" bg-[#1a1a19] w-[90%] h-[100px] rounded-2xl mx-auto border-[1.7px] border-[#383837] text-[#7d7d76]">

                <div className="flex text-[15px] relative bottom-3 w-[100%] justify-between px-5">
                    <div className="bg-[#151515] rounded-2xl border-[1.7px] border-[#383837] px-2">1 - Header</div>
                    <div className="bg-[#001c3d] rounded-2xl px-2">Interactivo: selector de moneda</div>
                </div>

                <div className=" flex justify-between px-10">

                    <div className=" bg-[#151515] border-3 border-dotted border-[#383837] px-12 py-2 rounded-md h-[50px]">
                        Logo
                    </div>

                    <div className=" flex text-[20px] justify-between w-[25%]">
                        <div className=" py-2">
                            Categorias
                        </div>
                        <div className=" py-2">
                            Institucional
                        </div>
                        <div className=" py-2">
                            Para Empresas
                        </div>
                    </div>

                    <div className="flex justify-between w-[7%] py-2">
                        <div className=" bg-[#032042] rounded-md px-3 py-2 border-2 border-[#0a2b53]">
                            USD
                        </div>

                        <div className=" bg-[#151515] rounded-md px-3 py-2 border-2 border-[#383837] ml-2">
                            ARS
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}