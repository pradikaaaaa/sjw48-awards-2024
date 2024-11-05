const VotePage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-r from-pink-200 via-white to-blue-200 p-8">
        {/* Title */}
        <h1 className="text-6xl font-bold text-center text-black mt-8 mb-4">
          <span className="border-b-8 border-blue-300">VOTE</span>
        </h1>
  
        {/* Instructions */}
        <p className="text-center text-gray-700 mb-6">
          Masukkan kode voting di kolom berikut.
          <br />
          <span className="text-sm text-gray-500">*Setiap kolom hanya dapat memuat 1 kode voting.</span>
          <br />
          <span className="text-sm text-gray-500">*Maks 50 kolom dalam satu sesi pengumpulan kode.</span>
        </p>
  
        {/* Voting Inputs */}
        <div className="space-y-4 w-full max-w-lg">
          {Array.from({ length: 5 }, (_, i) => (
            <div key={i} className="flex items-center">
              <span className="text-lg text-gray-500 w-8 text-center">{i + 1}</span>
              <input
                type="text"
                placeholder="Kode Voting (16 Karakter)"
                className="flex-1 px-4 py-3 ml-2 bg-white text-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
          ))}
        </div>
  
        {/* Add More Button */}
        <button className="mt-4 text-pink-500 text-2xl">
          <span className="font-bold">+</span>
        </button>
  
        {/* Submit Button */}
        <button className="mt-8 px-6 py-3 bg-gradient-to-r from-pink-500 to-blue-500 text-white font-bold text-lg rounded-full shadow-lg hover:opacity-90 transition duration-300">
          Submit Kode
        </button>
        </div>
    )
}

export default VotePage