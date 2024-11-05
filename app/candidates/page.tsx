import CardCandidate from "@/components/Card/CardCandidate"
import fanbaseList from "@/data/fanbase"

const CandidatesPage = () => {

    return (
        <>
            <section className="flex justify-start h-32 text-black bg-white">
                <h4 className="font-bold text-5xl text-wrap sm:p-8 sm:w-4/5 xl:pt-10 xl:pl-40 xl:w-1/2">
                    <p>
                        KANDIDATE PEMILIHAN FANBASE OF THE YEAR 2024
                    </p>
                </h4>
            </section>

            <section className="flex item-center justify-center h-full mt-20 pb-20 bg-white">
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6 xl:gap-x-8">
                    {fanbaseList.map((fanbase) => (
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

        </>
    )
}

export default CandidatesPage