import React from "react";

const TimelineItem = ({ cat, description, bgColor }: { cat: string, description: string[], bgColor: string }) => (
    <div className="flex items-center space-x-4 xl:w-2/3 lg:w-full md:w-full">
        <div
            className={`flex flex-col items-center justify-center w-32 h-32 ${bgColor} rounded-lg text-center text-white font-bold shadow-md`}
        >
            <span className="text-2xl">{cat}</span>
        </div>
        <div className="flex-1 p-8 border border-blue-200 rounded-lg shadow-sm">
            {/* <p>{description}</p> */}
            <ul className="list-disc text-black">
                {
                    description.map((index) => (
                        <>
                            <li>{index}</li>
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
                "Groupshot bersama SJW48", "Exclusive SJW48 Digital Photobook",
                "Free totebag (ganara), lightstick (potek), dan tshirt (qris onielity)",
                "Kesempatan mengganti pemenang kategori “of the year”",
                "Kode Vote “Fanbase of The Year” sebanyak 250 suara"],
            bgColor: "bg-gradient-to-r from-purple-400 to-pink-400"
        },
        {
            cat: "CAT2",
            description: [
                "Groupshot bersama SJW48",
                "Exclusive SJW48 Digital Photobook",
                "Free tshirt (qris onielity)",
                "Kode Vote “Fanbase of The Year” sebanyak 75 suara"
            ],
            bgColor: "bg-gradient-to-r from-yellow-400 to-orange-400"
        },
        {
            cat: "CAT6",
            description: [
                "Kode Vote “Fanbase of The Year” sebanyak 10 suara",
                "Dibuatkan community twitter",
                "Jas hujan sekali pakai"
            ],
            bgColor: "bg-gradient-to-r from-gray-400 to-blue-400"
        },
        {
            cat: "CAT8", description: [
                "Kode Vote “Fanbase of The Year” sebanyak 5 suara", "Rasa kekeluargaan dan sense of belonging"], bgColor: "bg-gradient-to-r from-orange-400 to-yellow-400"
        },
    ];

    return (
        <div className="space-y-4 p-8 bg-white min-h-screen">
            {items.map((item, index) => (
                <TimelineItem key={index} {...item} />
            ))}
        </div>
    );
};

export default BenefitCat;
