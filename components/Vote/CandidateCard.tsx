'use client'

const CandidateCard = ({ id, name, image, voteCount, onVoteChange }: { id: number, name: string, image: string, voteCount: number, onVoteChange : any }) => {
    // const [voteCount, setVoteCount] = useState(0);

    const incrementVote = () => onVoteChange(id, voteCount + 1)
    const decrementVote = () => onVoteChange(id, voteCount > 0 ? voteCount - 1 : 0)

    return (
        <div key={id} className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4">
            <img 
                src={image} 
                alt={name} 
                className="w-full h-full object-cover rounded-md mb-2" />
            <h3 className="text-center font-semibold">{name}</h3>
            <div className="flex items-center justify-between w-full mt-2">
                <button onClick={decrementVote} className="text-lg font-bold px-2">-</button>
                <span className="text-lg font-bold">{voteCount}</span>
                <button onClick={incrementVote} className="text-lg font-bold px-2">+</button>
            </div>
        </div>
    )
}

export default CandidateCard