import React from "react";

export default function Salida_Laboral_Y_Bolsa_De_Trabajo() {
    return (
        <>
            <div className=" bg-[#1a1a19] w-[90%] rounded-2xl mx-auto border-[1.7px] border-[#383837] text-[#7d7d76] mt-5">

                <div className="flex text-[15px] relative bottom-3 w-[100%] px-5">
                    <div className="bg-[#151515] rounded-2xl border-[1.7px] border-[#383837] px-2">4 - Salida Laboral y Bolsa de Trabajo</div>

                </div>

                <div className=" flex justify-around">

                    <div className=" w-[45%]">
                        <div className=" font-semibold text-[#dad9d6] text-[20px]">¿Donde podés Trabjar?</div>
                        <div className=" flex flex-wrap mt-2">
                            <div className=" bg-[#151515] border-2 border-[#383837] px-3 py-2 text-[#dad9d6] w-30 rounded-lg mx-1 text-center">
                                VideoJuegos
                            </div>
                            <div className=" bg-[#151515] border-2 border-[#383837] px-3 py-2 text-[#dad9d6] w-30 rounded-lg mx-1 text-center">
                                E-Sports
                            </div>
                            <div className=" bg-[#151515] border-2 border-[#383837] px-3 py-2 text-[#dad9d6] w-30 rounded-lg mx-1 text-center">
                                Multimedia
                            </div>
                            <div className=" bg-[#151515] border-2 border-[#383837] px-3 py-2 text-[#dad9d6] w-30 rounded-lg mx-1 text-center">
                                Animacion
                            </div>
                            <div className=" bg-[#151515] border-2 border-[#383837] px-3 py-2 text-[#dad9d6] w-30 rounded-lg mx-1 text-center">
                                VR/AR
                            </div>
                        </div>

                        <div className=" bg-[#151515] border-2 border-dashed rounded-2xl text-center my-4 flex p-auto h-20">
                            <div className=" mx-auto my-auto">Imgen / Ilustracion</div>
                        </div>
                    </div>

                    <div className=" w-[45%]">

                        <div className=" font-semibold text-[#dad9d6] text-[20px] flex flex-col">Bolsa de Trabajo</div>
                        <div className=" flex flex-col mt-2">
                            <div className=" w-[90%] h-[10px] bg-[#474746] rounded-lg"></div>
                            <div className=" w-[65%] h-[10px] bg-[#474746] rounded-lg mt-2"></div>
                            <div className=" w-[75%] h-[10px] bg-[#474746] rounded-lg mt-2"></div>
                        </div>

                        <div className=" bg-[#151515] border-2 border-[#383837] px-3 py-2 text-[#dad9d6] rounded-lg mt-2 text-center w-[20%]">
                            Ir a la Bolsa de trabajo
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}