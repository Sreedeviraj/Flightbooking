import axios from "axios";
import { data } from "react-router-dom";
export const commonapi=async(httpmethod,url ,reqbody,reqheader)=>{
    const reqconfig={
        method:httpmethod,
        url : url,
        data:reqbody,
        headers:reqheader?reqheader:{
            'content-Type':"application/json"
        }
    }
    return await axios(reqconfig).then((res)=>{
        return res
    }).catch((err)=>{
        return err
    })
}
