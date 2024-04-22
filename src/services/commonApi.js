import axios from "axios";

export const commonApi=async (httpRequest,url,reqBody)=>{
    const requesConfig={
        method:httpRequest,
        url:url,
        data:reqBody,
        headers:{"Content-Type":"application/json"}
    }
     return await axios(requesConfig).then((result)=>{
        console.log(result);
        return result;
    })
    .catch((error)=>{
        return error;
    })
}
