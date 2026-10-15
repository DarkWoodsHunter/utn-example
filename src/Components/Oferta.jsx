import React from "react";

export default function Oferta_Academica_Destacada() {
    return (
        <>
            <div className=" bg-[#1a1a19] w-[90%] rounded-2xl mx-auto border-[1.7px] border-[#383837] text-[#7d7d76] mt-5">

                <div className="flex text-[15px] relative bottom-3 w-[100%] justify-between px-5">
                    <div className="bg-[#151515] rounded-2xl border-[1.7px] border-[#383837] px-2">3 - Oferta Academica Destacada</div>
                    <div className="bg-[#001c3d] rounded-2xl px-2">Interactivo: pestañas + carrusel</div>
                </div>

                <div className=" flex font-semibold text-[#dad9d6] justify-between w-[35%] px-10">

                    <div className=" border-2 border-[#383837] rounded-lg py-2 px-3">
                        Carreras
                    </div>
                    <div className=" border-2 border-[#383837] rounded-lg py-2 px-3">
                        Cursos
                    </div>
                    <div className=" border-2 border-[#383837] rounded-lg py-2 px-3">
                        Diplomaturas
                    </div>
                    <div className=" border-2 border-[#383837] rounded-lg py-2 px-3">
                        Experto Univ.
                    </div>
                </div>

                <div className=" flex justify-around px-10 my-5">
                    <div className=" h-[100px] flex"><div className=" my-auto">{"<"}</div></div>
                    <div className=" bg-[#151515] w-[30%] flex rounded-lg border-2 border-dashed h-[100px]">
                        <div className=" m-auto">Targeta Informacion</div>
                    </div>
                    <div className=" bg-[#151515] w-[30%] flex rounded-lg border-2 border-dashed h-[100px]">
                        <div className=" m-auto">Targeta Informacion</div>
                    </div>
                    <div className=" bg-[#151515] w-[30%] flex rounded-lg border-2 border-dashed h-[100px]">
                        <div className=" m-auto">Targeta Informacion</div>
                    </div>
                    <div className=" h-[100px] flex"><div className=" my-auto">{">"}</div></div>
                </div>
            </div>
        </>
    )
}