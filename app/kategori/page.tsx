'use client'

import { useSearchParams } from "next/navigation";
import { Suspense } from 'react'

import CardCandidate from "@/components/Card/CardCandidate";
import categoryList from "@/data/category";

function SearchTipe() {
  const searchParams = useSearchParams()
  const tipe = searchParams.get('tipe')
  const filteredData = categoryList.filter((item) => item.tipe === tipe)

  return <>{filteredData.map((category) => (
    <>
      <div className="pt-3">
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

const CategoryPage = () => {
  return (
    <>
      <div className="min-h-screen bg-white">
        <section className="flex justify-center">
          <h2 className="text-4xl font-bold mx-8 py-8 text-black">KATEGORI</h2>
        </section>
        <Suspense>
          <SearchTipe />
        </Suspense>

      </div>
    </>
  );
};

export default CategoryPage;
