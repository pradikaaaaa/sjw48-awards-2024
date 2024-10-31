import CardCandidate from "@/components/Card/CardCandidate"
import fanbaseList from "@/data/fanbase"

const CandidatesPage = () => {

    return (
        <>
            <section className="flex justify-start h-32 text-black">
                <h4 className="font-bold text-5xl text-wrap sm:p-5 sm:w-4/5 xl:pt-10 xl:pl-40 xl:w-1/2">
                    <p>
                        KANDIDATE PEMILIHAN FANBASE OF THE YEAR 2024
                    </p>
                </h4>
            </section>

            <section className="flex item-center justify-center h-full mt-20 mb-20">
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-4 lg:grid-cols-6 xl:gap-x-8">
                    {fanbaseList.map((fanbase) => (
                        <>
                            <CardCandidate
                                id={fanbase.id}
                                name={fanbase.nama}
                                img={fanbase.logo}
                            />
                        </>
                    ))}
                </div>

            </section>

        </>
    )
}

export default CandidatesPage