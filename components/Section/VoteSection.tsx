const Card = ({ number, text, buttonText, url } : {number:string, text:string, buttonText:string, url:string}) => (
    <div className="flex flex-col items-center bg-gradient-to-br from-blue-300 to-pink-300 text-center rounded-2xl shadow-lg p-6 m-4 lg:w-96 2xs:w-72">
      <h1 className="text-6xl font-bold text-black">{number}</h1>
      <p className="text-black mt-2 mb-4">{text}</p>
      {buttonText && (
        <a href={url} className="px-4 py-2 bg-white text-blue-500 font-semibold rounded-full shadow-md hover:bg-gray-100 transition duration-300">
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
        text="fanbase dengan posisi tertinggi akan terpilih menjadi pemenang FANBASE of the Year" 
        buttonText=""
        url=""
      />
  
      {/* Vote Button */}
      <a href="/vote" className="mt-4 mb-10 px-6 py-3 bg-gradient-to-r from-pink-400 to-blue-400 text-white text-lg font-bold rounded-full shadow-lg hover:opacity-90 transition duration-300">
        Vote Sekarang
      </a>
    </div>
  );
  
  export default VoteSection;