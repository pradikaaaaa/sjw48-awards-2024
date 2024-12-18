"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import CandidateCard from "@/components/Vote/Form/CandidateCard";
import VoteSection from "@/components/Vote/Form/VoteSection";

import api from "@/services/api";
import { Fanbase } from "@/types/fanbase";
import { VoteFanbase } from "@/types/vote_fanbase";
import ModalKonfirmasiVote from "./ModalKonfirmasiVote";
import ModalSelesaiVote from "./ModalSelesaiVote";
import ModalError from "@/components/Modal/ModalError";

const VotingPage = ({
  maxVotes,
  listIdVote,
}: {
  maxVotes: number;
  listIdVote: number[];
}) => {
  const router = useRouter()

  const [maxVote, setMaxVote] = useState(0);
  const [nominasi, setNominasi] = useState<Fanbase[]>([]);
  const [openModalKonfirmasi, setOpenModalKonfirmasi] = useState(false);
  const [openModalSelesai, setOpenModalSelesai] = useState(false);

  const [openModalError, setOpenModalError] = useState(false);
  const [messageError, setMessageError] = useState("");

  const [votes, setVotes] = useState<VoteFanbase[]>([]);

  const handleVoteChange = (candidateId: number, newVoteCount: number) => {
    setVotes((prevVotes) =>
      prevVotes.map((item) =>
        item.id === candidateId ? { ...item, jumlah_vote: newVoteCount } : item
      )
    );
  };

  const handleVoteKonfirmasi = (open: boolean) => {
    setOpenModalKonfirmasi(open);
  };

  useEffect(() => {
    getData();
    setMaxVote(maxVotes);
  }, []);

  const getData = async () => {
    const endPoint = `/nominasi`;
    try {
      const response = await api.create().apiGET({ endPoint });
      setNominasi(response.data);
      const _votes = response.data.map((item: Fanbase) => ({
        id: item.id,
        jumlah_vote: 0,
        nama: item.nama,
      }));
      setVotes(_votes);
    } catch (error) {
      console.warn(error);
    }
  };

  const voteItem = (id: number): number => {
    const selectedVote = votes.find((item) => item.id === id);
    return selectedVote ? selectedVote.jumlah_vote : 0;
  };

  const getTotalVotes = () => {
    return votes.reduce((total, item) => total + item.jumlah_vote, 0);
  };

  const totalVotes = getTotalVotes();

  const getSelectedNominasi = () => {
    return votes.filter((item) => item.jumlah_vote !== 0);
  };

  const selectedNominasi = getSelectedNominasi();

  //
  const handleSubmitVote = async () => {
    const endPoint = `/vote/process`;
    const request = {
      id_kode: listIdVote,
      vote: selectedNominasi,
    };

    try {
      const response = await api.create().apiPOST({ endPoint, request });
      if (response.status == "200") {
        setOpenModalSelesai(true);
      } else if (response.status == "204") {
        setOpenModalError(true);
        setMessageError(response.message);
      }
    } catch (error) {
      console.warn(error);
    }
  };

  const handleModalError = (open: boolean) => {
    setOpenModalError(open);
    console.log('aaaaa')
    router.push("/")
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#FF5858] to-[#FFC8C8] p-8">
      <h1 className="text-center text-2xl font-bold mb-6">PILIH KANDIDAT</h1>
      <p className="text-center mb-4 text-sm">
        *Tambahkan jumlah poin suara untuk fanbase yang kamu dukung, kemudian
        klik tombol <b>VOTE</b>
      </p>
      <div className="flex flex-col md:flex-row">
        {/* Bagian VoteSection */}
        <div className="flex md:w-1/4 mb-6 md:mb-0 md:mr-6 2xs:justify-center 2xs:place-content-end">
          <VoteSection
            voteTerpakai={maxVote - totalVotes}
            jumlahVotes={maxVote}
            onClickVote={handleVoteKonfirmasi}
          />
        </div>

        {/* Bagian Kandidat */}
        <div className="static md:w-3/4 grid grid-cols-2 md:grid-cols-4 gap-4 xl:mb-4 sm:mb-80 xs:mb-80 2xs:mb-32">
          {nominasi.map((candidate, index) => (
            <CandidateCard
              key={index}
              id={candidate.id}
              name={candidate.nama}
              image={candidate.logo}
              voteCount={voteItem(candidate.id)}
              voteTerpakai={totalVotes}
              jumlahVote={maxVote}
              onVoteChange={handleVoteChange}
            />
          ))}
        </div>
      </div>

      <ModalKonfirmasiVote
        status={openModalKonfirmasi}
        fanbaseList={selectedNominasi}
        onClickVote={handleVoteKonfirmasi}
        onSubmitVote={handleSubmitVote}
      />


      <ModalSelesaiVote status={openModalSelesai} />

      <ModalError
        status={openModalError}
        message={messageError}
        onCloseModal={handleModalError}
      />
    </div>
  );
};

export default VotingPage;
