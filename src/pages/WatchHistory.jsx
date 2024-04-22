import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft,faHouse ,faTrash} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteViedoHistoryApi, getAllViedoHistoryApi } from "../services/AllAPI";

const WatchHistory = () => {

  const[history,setHistory]=useState([]);
  
  const[deleteHistory,setDeleteHistory]=useState(false);

  useEffect(()=>{
        const getViedoHistoryApi=async()=>{
           const response= await getAllViedoHistoryApi();
           console.log(response);
           setHistory(response.data)
        }
        getViedoHistoryApi();
        setDeleteHistory(false);
  },[deleteHistory])
  
  const deleteHandler=async(id)=>{
  const response=await deleteViedoHistoryApi(id);
  setDeleteHistory(true);
    console.log(response);
  }
  return (
    <>
     <div className="d-flex align-items-center mx-4 mb-5 mt-5">
      <h4>Watch History</h4>
     <Link to={'/home'} className="ms-auto" style={{textDecoration:'none' }}> <h5> <span id="wh">Back Home</span> <FontAwesomeIcon   className="px-2" icon={faArrowLeft} /><FontAwesomeIcon icon={faHouse} /></h5></Link>
     </div>
     <div className="row mx-4">
        <div className="col-md-1"></div>
        <div className="col-md-10"style={{overflowX:"auto"}}>
      {     history.length>0 ?<table className="table">
            <thead>
              <tr style={{textAlign:"center"}}>
                <th>#</th>
                <th>Caption</th>
                <th>Url</th>
                <th>Time Stamp</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>          
                {history?.map((item,index)=>{
                         return <tr key={index} style={{textAlign:"center"}}>
                          <td>{index+1}</td>
                          <td>{item?.caption}</td>
                          <td><a href={item?.url}>{item?.url}</a></td>
                          <td>{item?.formateddTime}</td>
                          <td><FontAwesomeIcon icon={faTrash} onClick={()=>deleteHandler(item.id)} /></td>
                          </tr>
                })}
               
              
            
            </tbody>
          </table>:<p>No History Is Prresent</p>}
        </div>
        <div className="col-md-1"></div>
     </div>
    </>
  )
}

export default WatchHistory
