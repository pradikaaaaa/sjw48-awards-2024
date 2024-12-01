const Card = ({ number, text, buttonText, url } : {number:string, text:string, buttonText:string, url:string}) => (
    <div className="flex flex-col items-center bg-gradient-to-br from-[#562135] to-[#BC4874] text-center rounded-2xl shadow-lg p-6 m-4 lg:w-96 2xs:w-72">
      <h1 className="text-6xl font-bold text-black outline-white">{number}</h1>
      <p className="text-white mt-2 mb-4">{text}</p>
      {buttonText && (
        <a href={url} className="px-4 py-2 bg-[#F86B85] text-white font-semibold rounded-full shadow-md hover:bg-gray-100 transition duration-300">
          {buttonText}
        </a>
      )}
    </div>
  );
  
  const VoteSection = () => (
    <div className="flex flex-col items-center p-0 bg-white">
      {/* Card 1 */}
      <Card 
        number="51" 
        text="fanbase JKT48 akan berpartisipasi sebagai kandidat" 
        buttonText="DAFTAR KANDIDAT" 
        url={"/candidates"}
      />
  
      {/* Card 2 */}
      <Card 
        number="1" 
        text="fanbase dengan posisi tertinggi akan terpilih menjadi pemenang Fanbase Pilihan Pemirsa 2024" 
        buttonText=""
        url=""
      />
  
      {/* Vote Button */}
      <a href="/vote-fanbase" className="mt-4 mb-10 px-6 py-3 bg-[#F86B85] text-center text-white text-lg font-bold rounded-full shadow-lg hover:opacity-90 transition duration-300 lg:w-96 2xs:w-72">
        VOTE SEKARANG
      </a>
    </div>
  );
  
  export default VoteSection;