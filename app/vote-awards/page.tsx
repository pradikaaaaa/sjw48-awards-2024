import FrameVote from "@/components/Vote/Frame";

const VoteGForm = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-r from-[#FF5858] to-[#FFC8C8] p-8">
        <h1 className="text-6xl font-bold text-center text-black mt-8 mb-4">
          <span className="border-b-8 border-blue-300">VOTE</span>
        </h1>

        <div className="mb-4">
          atau klik&nbsp;
          <a
            className="border-b-2 border-blue-200"
            href="https://forms.gle/GWPEstpZ1hZinmRHA" target="_blank">
            disini
          </a>
        </div>

        <div className="w-full max-w-4xl mx-auto">
          <FrameVote />
        </div>
      </div>
    </>
  );
};

export default VoteGForm;
