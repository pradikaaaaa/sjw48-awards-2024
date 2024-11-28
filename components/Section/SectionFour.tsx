import React from "react";

const CategoryItem = ({ cat, description, bgColor }: { cat: string, description: string[], bgColor: string }) => (
    <div className="flex items-center space-x-4 xl:w-2/3 lg:w-full md:w-full">
        <div
            className={`flex flex-col items-center justify-center w-32 h-32 ${bgColor} rounded-lg text-center text-white font-bold shadow-md`}
        >
            <span className="text-2xl">{cat}</span>
        </div>
        <div className="flex-1 p-8 border border-[#F86B85] rounded-lg shadow-sm">
            {/* <p>{description}</p> */}
            <ul className="list-disc text-black">
                {
                    description.map((item, index) => (
                        <>
                            <li key={index}>{item}</li>
                        </>
                    ))
                }
            </ul>
        </div>
    </div>
);

const BenefitCat = () => {
    const items = [
        {
            cat: "CAT1",
            description: [
                "Soundcheck Experience",
                "Eval Experience (after show)",
                "Polaroid + signed (member sjw48)",
                "Screening After Movie (30 min sebelum rilis di sosmed)",
                "Dilibatkan di shortmovie SJW48",
                "Groupshot bersama SJW48", 
                "Exclusive SJW48 Digital Photobook",
                "Free totebag, lightstick, dan tshirt",
                "Kesempatan mengganti pemenang kategori “of the year”",
                "Kode Vote “Fanbase Pilihan Pemirsa” sebanyak 250 suara"],
            bgColor: "bg-gradient-to-r from-[#60EFFF] from-10% to-[#4545F7]"
        },
        {
            cat: "CAT2",
            description: [
                "Groupshot bersama SJW48",
                "Exclusive SJW48 Digital Photobook",
                "Free tshirt",
                "Kode Vote “Fanbase Pilihan Pemirsa” sebanyak 75 suara"
            ],
            bgColor: "bg-gradient-to-r from-[#F89B29] to-[#FF0F7B]"
        },
        {
            cat: "CAT6",
            description: [
                "Kode Vote “Fanbase Pilihan Pemirsa” sebanyak 10 suara",
                "Dibuatkan community twitter",
                "Jas hujan sekali pakai"
            ],
            bgColor: "bg-gradient-to-r from-[#FFEDA0] to-[#FFA585]"
        },
        {
            cat: "CAT8", description: [
                "Kode Vote “Fanbase Pilihan Pemirsa” sebanyak 5 suara", "Rasa kekeluargaan dan sense of belonging"],
            bgColor: "bg-gradient-to-r from-[#6FE3E1] to-[#5257E5]"
        },
    ];

    return (
        <div className="bg-white">
            <h2 className="text-4xl font-bold mx-8 py-8 text-black">TICKET BENEFIT</h2>
            <div className="space-y-4 p-8 bg-white min-h-screen">
                {items.map((item, index) => (
                    <CategoryItem key={index} {...item} />
                ))}
            </div>
        </div>
    );
};

export default BenefitCat;
