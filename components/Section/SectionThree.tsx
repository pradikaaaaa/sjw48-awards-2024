"use client";

import React from "react";

const ItemCard = ({
  title,
  subtitle,
  buttonLabel,
  url_cat,
}: {
  title: string;
  subtitle: string;
  buttonLabel: string;
  url_cat: string;
}) => (
  <div className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg mb-4">
    <div>
      <h2 className="text-lg text-black font-bold">{title}</h2>
      <p className="text-sm text-gray-700 font-semibold mt-1">{subtitle}</p>
    </div>
    <a
      href={url_cat}
      target="_blank"
      className="bg-[#1D5D83] text-white font-semibold px-4 py-2 rounded-md shadow-md"
    >
      {buttonLabel}
    </a>
  </div>
);

const VoteList = () => {
  const items = [
    {
      title: "CAT 1 SJW48 Awards 2024",
      subtitle: "250 Suara",
      buttonLabel: "PESAN",
      url_cat : "https://wa.me/6285183184848"
    },
    {
      title: "CAT 2 SJW48 Awards 2024",
      subtitle: "75 Suara",
      buttonLabel: "PESAN",
      url_cat : "https://tiptip.id/"
    },
    {
      title: "CAT 6 SJW48 Awards 2024",
      subtitle: "10 Suara",
      buttonLabel: "PESAN",
      url_cat : "https://tiptip.id/"
    },
    {
      title: "CAT 8 SJW48 Awards 2024",
      subtitle: "5 Suara",
      buttonLabel: "PESAN",
      url_cat : "https://tiptip.id/"
    },
  ];

  return (
    <div className="lg:px-64 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-8 bg-white min-h-10">
      {items.map((item, index) => (
        <ItemCard key={index} {...item} />
      ))}
    </div>
  );
};

export default VoteList;
