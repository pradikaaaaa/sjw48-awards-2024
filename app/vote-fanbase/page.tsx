'use client'

// import { useRouter } from "next/navigation"
import { useState } from "react"
import api from "@/services/api"
import FormSection from "@/components/Vote/Home/FormSection"
import VotingPage from "@/components/Vote/Form/VotingPage"
import { KodeVote } from "@/types/kode_vote"
import ModalError from "@/components/Modal/ModalError"

const VotePage = () => {
  const [isCodeValid, setIsCodeValid] = useState(false)
  const [maxVote, setMaxVote] = useState(0)
  const [listId, setListId] = useState([])
  const [openModalError, setOpenModalError] =  useState(false)
  const [messageError, setMessageError] = useState('')
  const endPoint = `/vote/getVote`

  const handleSubmitCode = async (kodeVote : string[]) => {
    const request = {
      "kode_vote" : kodeVote
    }

    try{
      const response = await api.create().apiPOST({endPoint, request})
      if(response.status == '200'){
        const totalJumlah = response.data.reduce((accumulator: number, item : KodeVote) => accumulator + item.jumlah, 0);
        setMaxVote(totalJumlah)

        const idVote = response.data.map((item : KodeVote) => item.id);
        setListId(idVote)
        setIsCodeValid(true)
      }else if(response.status == '204'){
        setOpenModalError(true)
        setMessageError(response.message)
      }
    }catch(error){
      console.warn(error)
    }
  }

  const handleModalError = (open : boolean) => {
    setOpenModalError(open)
  }

  return (
    <div>
      {isCodeValid ? (
        <div>
          <VotingPage listIdVote={listId} maxVotes={maxVote}/>
        </div>
      ) : (
        <div>
          <FormSection onCodeSubmit={handleSubmitCode}/>
          <ModalError 
            status={openModalError} 
            message={messageError}
            onCloseModal={handleModalError} />
        </div>
      )}
    </div>
  )
}

export default VotePage