"use client";

import { useState } from "react";
import Image from "next/image"

const CandidateCard = ({
  id,
  name,
  image,
  voteCount,
  voteTerpakai,
  jumlahVote,
  onVoteChange,
}: {
  id: number;
  name: string;
  image: string;
  voteCount: number;
  voteTerpakai: number;
  jumlahVote: number;
  onVoteChange: (id: number, voteCount: number) => void;
}) => {
  const [count, setCount] = useState(voteCount);

  const incrementVote = () => {
    if (voteTerpakai < jumlahVote) {
      setCount(count + 1);
      onVoteChange(id, voteCount + 1);
    }
  };
  const decrementVote = () => {
    setCount(count > 0 ? count - 1 : 0);
    onVoteChange(id, voteCount > 0 ? voteCount - 1 : 0);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value.replace(/^0+(?=\d)/, ''));
    if (!isNaN(newValue)) {
      if (voteTerpakai - count + newValue <= jumlahVote) {
        setCount(newValue);
        onVoteChange(id, newValue);
      }
    } else if (e.target.value === "") {
      setCount(0);
      onVoteChange(id, 0);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault();
    }
  };

  const handleWheel = (e: React.WheelEvent<HTMLInputElement>) => {
    e.currentTarget.blur(); // Hilangkan fokus saat scroll
  };

  return (
    <div
      key={id}
      className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4"
    >
      <Image width={200} height={200} quality={50}
        src={image}
        alt={name}
        className="w-full h-full object-cover rounded-md mb-2"
      />
      <h3 className="text-center font-semibold">{name}</h3>
      <div className="flex items-center justify-between w-full mt-2">
        <button onClick={decrementVote} className="text-lg font-bold px-2">
          -
        </button>
        {/* <span className="text-lg font-bold">{voteCount}</span> */}
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm text-center text-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onWheel={handleWheel}
          value={count}
          min={0}
          step={1}
        />
        <button onClick={incrementVote} className="text-lg font-bold px-2">
          +
        </button>
      </div>
    </div>
  );
};

export default CandidateCard;
