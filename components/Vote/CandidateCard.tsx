'use client'

import { useState } from 'react'

const CandidateCard = ({
    id,
    name,
    image,
    voteCount,
    voteTerpakai,
    jumlahVote,
    onVoteChange
}:
    {
        id: number,
        name: string,
        image: string,
        voteCount: number,
        voteTerpakai: number,
        jumlahVote: number,
        onVoteChange: (id: number, voteCount: number) => void
    }) => {
    const [count, setCount] = useState(voteCount);

    const incrementVote = () => {
        if (voteTerpakai < jumlahVote) {
            setCount(count + 1)
            onVoteChange(id, voteCount + 1)
        }
    }
    const decrementVote = () => {
        setCount(count > 0 ? count - 1 : 0)
        onVoteChange(id, voteCount > 0 ? voteCount - 1 : 0)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(e.target.value)
        if (!isNaN(newValue)){
            if(newValue <= (jumlahVote - voteTerpakai)){
                setCount(newValue)
                onVoteChange(id, newValue)
            }
        }
    }

    return (
        <div key={id} className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4">
            <img
                src={image}
                alt={name}
                className="w-full h-full object-cover rounded-md mb-2" />
            <h3 className="text-center font-semibold">{name}</h3>
            <div className="flex items-center justify-between w-full mt-2">
                <button onClick={decrementVote} className="text-lg font-bold px-2">-</button>
                {/* <span className="text-lg font-bold">{voteCount}</span> */}
                <input type="number"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm text-center text-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5"
                    onChange={handleChange}
                    value={count} />
                <button onClick={incrementVote} className="text-lg font-bold px-2">+</button>
            </div>
        </div>
    )
}

export default CandidateCard