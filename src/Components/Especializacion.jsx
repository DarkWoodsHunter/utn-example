import React from "react";

export default function Areas_de_Especializacion() {
    return (
        <>
            <div className=" bg-[#1a1a19] w-[90%] rounded-2xl mx-auto border-[1.7px] border-[#383837] text-[#7d7d76] mt-5">

                <div className="flex text-[15px] relative bottom-3 w-[100%] px-5">
                    <div className="bg-[#151515] rounded-2xl border-[1.7px] border-[#383837] px-2">8 - Áreas de Especialización</div>

                </div>

                <div className=" flex justify-around pb-4">

                    <div className=" flex flex-col border-2 border-dashed rounded-lg border-[#383837] bg-[#151515] w-100 h-30">
                        <div className=" mx-auto mt-auto">
                            Programacion
                        </div>
                        <div className=" mx-auto mb-auto text-[#dad9d6]">
                            imagen + text + link
                        </div>
                    </div>
                    <div className=" flex flex-col border-2 border-dashed rounded-lg border-[#383837] bg-[#151515] w-100 h-30">
                        <div className=" mx-auto mt-auto">
                            Arte Y Diseño
                        </div>
                        <div className=" mx-auto mb-auto text-[#dad9d6]">
                            imagen + text + link
                        </div>
                    </div>
                    <div className=" flex flex-col border-2 border-dashed rounded-lg border-[#383837] bg-[#151515] w-100 h-30">
                        <div className=" mx-auto mt-auto">
                            Audio Y Sonido
                        </div>
                        <div className=" mx-auto mb-auto text-[#dad9d6]">
                            imagen + text + link
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}