'use client'

// import { useRouter } from "next/navigation"
import { useState } from "react"
import api from "@/services/api"
import FormSection from "@/components/Vote/Home/FormSection"
import VotingPage from "@/components/Vote/Form/VotingPage"

const VotePage = () => {
  const [isCodeValid, setIsCodeValid] = useState(false)
  const [maxVote, setMaxVote] = useState(0)
  const endPoint = `/vote/getVote`

  const handleSubmitCode = async (kodeVote : string[]) => {
    const request = {
      "kode_vote" : kodeVote
    }

    try{
      const response = await api.create().apiPOST({endPoint, request})
      if(response.status == '200'){
        const totalJumlah = response.data.reduce((accumulator, item) => accumulator + item.jumlah, 0);
        setMaxVote(totalJumlah)
        setIsCodeValid(true)
      }
    }catch(error){
      console.warn(error)
    }
  }

  return (
    <div>
      {isCodeValid ? (
        <div>
          <VotingPage maxVotes={maxVote}/>
        </div>
      ) : (
        <div>
          <FormSection onCodeSubmit={handleSubmitCode}/>
        </div>
      )}
    </div>
  )
}

export default VotePage