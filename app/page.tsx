import Banner from "@/components/Banner"
import BenefitCat from "@/components/Section/SectionFour"

import SectionOne from "@/components/Section/SectionOne"
import VoteList from "@/components/Section/SectionThree"
import SectionTwo from "@/components/Section/SectionTwo"
import VoteSection from "@/components/Section/VoteSection"
import ModalKonfirmasiVote from "@/components/Vote/ModalKonfirmasiVote"

export default function Home() {
    return (
        <>
            <Banner />
            <SectionOne />
            <VoteSection />
            <SectionTwo />
            <VoteList />
            <BenefitCat />

            
            <ModalKonfirmasiVote/>
        </>
    )
}