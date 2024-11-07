'use client'

import { useState} from 'react'
import CandidateCard from "@/components/Vote/CandidateCard"
import VoteSection from "@/components/Vote/VoteSection"
import fanbaseList from "@/data/fanbase";

const VotePage = () => {

    const [votes, setVotes] = useState(
        fanbaseList.reduce((acc, candidate) => {
            acc[candidate.id] = 0;
            return acc;
        }, {})
    )

    const handleVoteChange = (candidateId, newVoteCount) => {
        setVotes(prevVotes => ({
            ...prevVotes,
            [candidateId]: newVoteCount,
        }))
    }

    const totalVotes = Object.values(votes).reduce((sum, count) => sum + count, 0);

    return (
        <div className="min-h-screen bg-gradient-to-r from-[#FF5858] to-[#FFC8C8] to-70% p-8">
            <h1 className="text-center text-2xl font-bold mb-6">PILIH KANDIDAT</h1>
            <p className="text-center mb-4 text-sm">*Tambahkan jumlah poin suara untuk member yang kamu dukung, kemudian klik tombol VOTE</p>
            <div className="flex flex-col md:flex-row">
                {/* Bagian VoteSection */}
                <div className="static md:w-1/4 mb-6 md:mb-0 md:mr-6">
                    <VoteSection voteTerpakai={totalVotes} jumlahVotes={30} />
                </div>

                {/* Bagian Kandidat */}
                <div className="static md:w-3/4 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {fanbaseList.map((candidate, index) => (
                        <CandidateCard
                            key={index}
                            id={candidate.id}
                            name={candidate.nama}
                            image={candidate.logo}
                            voteCount={votes[candidate.id]}
                            onVoteChange={handleVoteChange}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default VotePage