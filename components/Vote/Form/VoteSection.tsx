const VoteSection = ({ voteTerpakai, jumlahVotes, onClickVote }: { voteTerpakai: number, jumlahVotes: number, onClickVote: (status: boolean) => void }) => {
    const voteClick = () => onClickVote(true)

    return (
        <>
            <div className="bg-white 
                p-6 rounded-lg shadow-lg text-center 
                fixed 
                xl:w-80 lg:w-60 md:w-44 sm:w-3/4 xs:w-3/4 
                xl:visible
                lg:visible
                md:visible
                2xs:invisible">
                <h2 className="text-lg font-bold mb-4">POIN SUARA TERSEDIA</h2>
                <p className="text-2xl font-bold mb-4">{voteTerpakai} / {jumlahVotes}</p>
                <button
                    onClick={voteClick}
                    className={`${voteTerpakai == 0 ? "bg-gradient-to-r from-[#60EFFF] to-[#4545F7]" : "bg-gray-700"}  text-white px-4 py-2 rounded-lg font-semibold`}
                    disabled={voteTerpakai > 0}>
                    VOTE
                </button>
                <p className={`${voteTerpakai == 0 ? "hidden" : ""} text-xs text-red-500 mt-2`}>*Poin suara masih belum dipakai semua.</p>
            </div>

            {/* mobile */}
            <div className="flex flex-col 
                g-transparent 
                md:invisible
                2xs:visible 
                w-3/4 h-36 fixed 
                bottom-12
                left-1/2 transform -translate-x-1/2">
                <div className="flex bg-white h-auto py-3 px-2 border-black border-solid border-4">
                    <div className="basis-3/4 text-black">
                        Poin Suara Tersedia
                    </div>
                    <div className="basis-1/4 text-black">
                        {voteTerpakai} / {jumlahVotes}
                    </div>

                </div>
                <div>
                    <button
                        onClick={voteClick}
                        disabled={voteTerpakai > 0} 
                        className={`${voteTerpakai == 0 ? "bg-gradient-to-r from-[#60EFFF] to-[#4545F7]" : "bg-gray-700"} w-full mt-4 px-4 py-2 text-white rounded-md shadow-lg`}>
                        VOTE
                    </button>
                </div>

                <div className="text-center">
                    <p className={`${voteTerpakai == 0 ? "hidden" : ""} text-xs text-red-500 mt-2`}>*Poin suara masih belum dipakai semua.</p>
                </div>

            </div>
        </>
    );
}

export default VoteSection