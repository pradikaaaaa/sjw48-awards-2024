"use client";

import { useState, ChangeEvent, FormEvent  } from "react";

const FormSection = ({onCodeSubmit}:{onCodeSubmit:(code: string[])=> void}) => {
  const [formData, setFormData] = useState({
    kode1: "",
    kode2: "",
    kode3: "",
    kode4: "",
    kode5: "",
  });

  const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setFormData({...formData, [name]:value})
  }

  const handleSubmit = async (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = Object.values(formData).filter(value => value !== "")
    onCodeSubmit(result)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-r from-[#FF5858] to-[#FFC8C8] p-8">
      {/* Title */}
      <h1 className="text-6xl font-bold text-center text-black mt-8 mb-4">
        <span className="border-b-8 border-blue-300">VOTE</span>
      </h1>

      {/* Instructions */}
      <p className="text-center text-black-900 mb-6">
        Masukkan kode voting di kolom berikut.
        <br />
        <span className="text-sm text-black-900">
          *Setiap kolom hanya dapat memuat 1 kode voting.
        </span>
        {/* <br />
          <span className="text-sm text-gray-500">*Maks 50 kolom dalam satu sesi pengumpulan kode.</span> */}
      </p>

      {/* Voting Inputs */}
      <form onSubmit={handleSubmit}>
        <div className="space-y-4 w-full max-w-lg">
          {Array.from({ length: 5 }, (_, i) => (
            <div key={i} className="flex items-center">
              {/* <span className="text-lg text-gray-900 w-8 text-center">{i + 1}</span> */}
              <input
                name={`kode${i + 1}`}
                type="text"
                onChange={handleChange}
                placeholder="Kode Voting (16 Karakter)"
                className="flex-1 px-4 py-3 ml-2 bg-white text-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
          ))}
        </div>

        {/* Add More Button */}
        {/* <button className="mt-4 text-pink-500 text-2xl">
          <span className="font-bold">+</span>
        </button> */}

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-8 px-6 py-3 bg-gradient-to-r from-[#60EFFF] to-[#4545F7] text-white font-bold text-lg rounded-full shadow-lg hover:opacity-90 transition duration-300"
        >
          GUNAKAN KODE
        </button>
      </form>
    </div>
  );
};

export default FormSection;
