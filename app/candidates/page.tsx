"use client"

import CardCandidate from "@/components/Card/CardCandidate"

import API from "@/services/api";
import { Fanbase } from "@/types/fanbase";
import { useState, useEffect } from "react";

const CandidatesPage = () => {
    const [nominasi, setNominasi] = useState<Fanbase[]>([])
    const endPoint = `/nominasi`

    useEffect(()=>{
        getData()        
    },[])

    const getData = async () => {
        try {
            const data = await API.create().apiGET({endPoint});
            // console.log(data)
            setNominasi(data.data)

            // console.log(data.data)
        }catch(error){
            console.warn(error)
        }
    }

    return (
        <>
            <div className="min-h-screen bg-white">
                <section className="flex justify-start h-32 text-black bg-white">
                    <h4 className="font-bold lg:text-5xl sm:text-4xl xs:text-4xl 2xs:text-3xl text-wrap 2xs:p-8 xs:p-8 sm:p-8 sm:w-4/5 lg:mx-14  xl:p-14  xl:w-1/2">
                        <p>
                            KANDIDATE FANBASE PILIHAN PEMIRSA 2024
                        </p>
                    </h4>
                </section>

                <section className="flex item-center justify-center h-full mt-20 pb-20 mx-4 bg-white">
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 2xs:grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 xl:gap-x-8">
                        {nominasi.map((fanbase) =>(
                            <>
                                <div key={fanbase.id}>
                                    <CardCandidate
                                        id={fanbase.id}
                                        name={fanbase.nama}
                                        img={fanbase.logo}
                                    />
                                </div>
                            </>
                        ))}
                    </div>

                </section>
            </div>
        </>
    )
}

export default CandidatesPage