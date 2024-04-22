import { commonApi } from "./commonApi"
import {serverUrl}   from "./baseUrl"

export const uploadViedoApi=async(reqBody)=>{
     return await commonApi('POST',`${serverUrl}/videos`,reqBody)
}

// api to get uploaded viedos
export const getUploadViedoApi=async()=>{
     return await commonApi('GET',`${serverUrl}/videos`,"")
}

export const deleteVideoApi=async(id)=>{
    return  await commonApi('DELETE',`${serverUrl}/videos/${id}`,{})
}
export const addToHistoryApi=async(reqBody)=>{
    return  await commonApi('POST',`${serverUrl}/history`,reqBody)
}
export const getAllViedoHistoryApi=async()=>{
     return await commonApi('GET',`${serverUrl}/history`,"")
 }
 export const deleteViedoHistoryApi=async(id)=>{
     return await commonApi('DELETE',`${serverUrl}/history/${id}`,{})
 }
 export const addCategoryApi=async(req)=>{
    return await commonApi('POST',`${serverUrl}/category/`,req)
 }
 export const getAllCategoryApi=async ()=>{
    return await commonApi('GET',`${serverUrl}/category`,"")
 }
 
 export const deleteCategoryApi=async (id)=>{
    return await commonApi('DELETE',`${serverUrl}/category/${id}`,{})
 }
//  api to get a particular viedo
export const getAviedo=async(id)=>{
    return await commonApi('GET',`${serverUrl}/videos/${id}`,"")
}

export const updateCategoryApi=async(id,reqody)=>{
    return await commonApi('PUT',`${serverUrl}/category/${id}`,reqody)
}
 
