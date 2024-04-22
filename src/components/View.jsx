import { Col, Row } from "react-bootstrap"
import ViedoCard from "./ViedoCard"
import { getAllCategoryApi, getUploadViedoApi, updateCategoryApi } from "../services/AllAPI"
import { useEffect, useState } from "react"


const View = ({videoUploadStatus}) => {



 const [data,setData]=useState([]);


 const getvideo=async()=>{
  const response=await getUploadViedoApi();
  setData(response.data)
  // console.log(response.data);
}

  
 const[deletes,setDeleteApi]=useState(false);
  useEffect(
       ()=>{
      
      setDeleteApi(false)
      getvideo(); 
    }
    ,[videoUploadStatus,deletes]
  )

  const DrageOverHandler=((e)=>{
    e.preventDefault();
  })

  const handleViedoDrop=async(e)=>{
        const sharedData=e.dataTransfer.getData("sharedData");
        const{categoryId,viedoId}=JSON.parse(sharedData)
        console.log(categoryId);
        console.log(viedoId);
        const {data}=await getAllCategoryApi();
        console.log(data);

        const values=data.find(item=>item.id==categoryId);
        const remianing=values.allviedo.filter((data)=>data.id!=viedoId)
        let reqBody={
          allviedo:remianing
        }
       const resposne= await updateCategoryApi(categoryId,reqBody)
        console.log(resposne);

  }
  return (
    <>
      <Row droppable="true" onDragOver={(e)=>DrageOverHandler(e)} onDrop={(e)=>handleViedoDrop(e)}>
         {data?.map((value,index)=> (<Col key={index} sm={12} md={6} lg={4} xl={3}>
             <ViedoCard  setDeleteApi={setDeleteApi}  videoContent={value} setDragViedoo></ViedoCard>
              </Col>))}
        
       {data?.length===0 && <h5 className="mt-5 text-warning">No Viedo Uploaded Yet....</h5>}
      </Row>
    </>
  )
}

export default View
