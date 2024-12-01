import axios from "axios";

const create = () => {

    const client = axios.create({
        baseURL: process.env.NEXT_PUBLIC_API_URL,
        timeout:10000,
        headers:{
            'Content-Type': 'application/json',
        }
    })

    const apiGET = async ({endPoint} : {endPoint:string}) => {
        const res = await client.get(endPoint)
        return res.data
    }

    const apiPOST = async ({endPoint, request} : {endPoint: string, request : object}) => {
        const res = await client.post(endPoint, request)

        return res.data
    }

    return {
        apiGET,
        apiPOST
    }
}

export default {create}