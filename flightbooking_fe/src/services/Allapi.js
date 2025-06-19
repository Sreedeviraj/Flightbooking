import { BASE_URL } from "./baseurl"
import { commonapi } from "./commonapi"

export const addflightApi=async(data)=>{
    return await commonapi("POST",`${BASE_URL}/add/flight`,data, "")
}
export const getAllflightApi = async()=>{
    return await commonapi("GET" , `${BASE_URL}/get/flight`,"","")
}