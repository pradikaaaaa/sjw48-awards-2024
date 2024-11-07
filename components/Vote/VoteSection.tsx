const VoteSection = ({voteTerpakai, jumlahVotes}:{voteTerpakai : number, jumlahVotes : number}) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-bold mb-4">POIN SUARA TERSEDIA</h2>
            <p className="text-2xl font-bold mb-4">{voteTerpakai} / {jumlahVotes}</p>
            <button 
                className={`${voteTerpakai == jumlahVotes ? "bg-gradient-to-r from-[#60EFFF] to-[#4545F7]" : "bg-gray-700"}  text-white px-4 py-2 rounded-lg font-semibold`} 
                disabled={voteTerpakai < jumlahVotes}>
                VOTE
            </button>
            <p className={`${voteTerpakai == jumlahVotes ? "hidden" : "" } text-xs text-red-500 mt-2`}>*Poin suara masih belum dipakai semua.</p>
        </div>
    );
}

export default VoteSection