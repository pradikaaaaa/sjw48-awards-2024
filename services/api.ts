import axios from "axios";

const create = () => {
    const baseURL = "http://localhost:8000"

    const client = axios.create({
        baseURL:baseURL,
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