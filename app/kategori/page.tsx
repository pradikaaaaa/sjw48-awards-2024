'use client'

import { useSearchParams } from "next/navigation";
import { Suspense } from 'react'
import Link from "next/link"

import CardCandidate from "@/components/Card/CardCandidate";
import categoryList from "@/data/category";
import { Category } from "@/types/category";

function SearchTipe({ filteredData }: { filteredData: Category[] }) {
  return <>{filteredData.map((category) => (
    <>
      <div key={category.id} className="pt-3">
        <h2 className="text-3xl font-bold mx-8 text-black">
          {category.nama}
        </h2>
        <hr className="mx-6 mt-1" />
        <section className="flex item-center justify-center h-full mt-4 pb-6 mx-4 bg-white">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 2xs:grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 xl:gap-x-8">
            {category.nominasi.map((nominasi) => (
              <>
                <div key={nominasi.id}>
                  <CardCandidate
                    id={nominasi.id}
                    name={nominasi.nama}
                    img={nominasi.foto}
                  />
                </div>
              </>
            ))}
          </div>
        </section>
      </div>
    </>
  ))}</>
}

function GeneratePage() {
  const searchParams = useSearchParams()
  const tipe = searchParams.get('tipe')
  const filteredData = categoryList.filter((item) => item.tipe === tipe)

  const kategori = [
    {
      nama: "TERFAVORIT",
      tipe: "terfavorit",
      deskripsi: "Sebuah penghargaan di rangkaian SJW48 Awards untuk insan wota dan member yang dipilih melalui pemungutan suara di link ",
      url: "/vote/terfavorit"
    },
    {
      nama: "OF THE YEAR",
      tipe: "of-the-year",
      deskripsi: "Sebuah penghargaan di rangkaian SJW48 Awards untuk insan wota dan member yang dipilih oleh kurator internal SJW48 dengan keputusan mutlak dan tidak dapat diganggu gugat (kecuali oleh pemegang tiket CAT1).",
      url: null
    }
  ]

  const filteredKategori = kategori.filter((item) => item.tipe === tipe)

  return (
    <>
      <div className="min-h-screen bg-white">
        <section className="flex justify-center flex-col items-center mb-9">
          <h2 className="text-4xl font-bold mx-8 pt-8 mb-2 text-black">KATEGORI {filteredKategori[0].nama}</h2>
          <p className="text-xl text-justify w-3/4 text-black">
            {filteredKategori[0].deskripsi} {filteredKategori[0].url ? <>
              <Link
                className="cursor-pointer text-blue-500 hover:text-gray-400"
                href={filteredKategori[0].url}>
                ini.
              </Link>
            </> : null}
          </p>
        </section>
        <SearchTipe filteredData={filteredData} />
      </div>
    </>
  )
}

const CategoryPage = () => {
  return (
    <>
      <Suspense>
        <GeneratePage />
      </Suspense>
    </>
  );
};

export default CategoryPage;
