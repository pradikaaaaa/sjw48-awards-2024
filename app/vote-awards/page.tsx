import FrameVote from "@/components/Vote/Frame";

const VoteGForm = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-r from-[#FF5858] to-[#FFC8C8] p-8">
        <h1 className="text-6xl font-bold text-center text-black mt-8 mb-4">
          <span className="border-b-8 border-blue-300">VOTE</span>
        </h1>

        <p>
            atau klik di sini
        </p>

        <div className="aspect-w-16 aspect-h-9 bg-blue-500"></div>

        <div className="w-full max-w-4xl mx-auto">
            <FrameVote />
        </div>
      </div>
    </>
  );
};

export default VoteGForm;
