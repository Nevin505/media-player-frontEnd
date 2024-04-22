import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { addToHistoryApi, deleteVideoApi } from "../services/AllAPI";

const ViedoCard = ({videoContent,setDeleteApi,isPresent,setDragViedoo}) => {
  const handleClose = () => setShow(false);
  const handleShow = async() =>{ 
    setShow(true)
    let caption=videoContent.caption;
    let url=videoContent.embedLink;
    let time=new Date();
    let options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour:"2-digit",
      minute:"2-digit",
      second:"2-digit"
    };
    
   let formateddTime= new Intl.DateTimeFormat("en-GB",options).format(time);
   const reqBody={
    caption,
    url,
    formateddTime
 }
    const response=await addToHistoryApi(reqBody);
  console.log(response);
  };
  const [show, setShow] = useState(false);

  const handleDelete=async(id)=>{
    console.log("Clicked");
       const response= await deleteVideoApi(id);  
       setDeleteApi(true);
       console.log(response);
  }

  const handleDragFunction=(e,id)=>{

    e.dataTransfer.setData("viedoId",id)
  }
  return (
    <>
      <Card  style={{width:'100%'}} onClick={handleShow}  className="mt-5" draggable="true" onDragStart={(e)=>handleDragFunction(e,videoContent?.id)}>
        {!isPresent && <Card.Img variant="top"   src={videoContent?.imageUrl} width={'100%'} height={'300PX'} />}
        <Card.Body className="d-flex justify-content-between">
          <Card.Text>
          {videoContent?.caption}
          </Card.Text>
         {!isPresent && <Button variant="danger" onClick={handleClose}>
          <FontAwesomeIcon icon={faTrash}  onClick={()=>handleDelete(videoContent?.id)} />
          </Button>}
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        {/* https://www.youtube.com/embed/OnxChVgg6N8?autoplay=1 */}
        <Modal.Body ><iframe width="100%" height="391" src={`${videoContent?.embedLink}?autoplay=1`} title="Premalu | Official Malayalam Trailer | Naslen | Mamitha | April 12 | DisneyPlus Hotstar" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Modal.Body>
      </Modal>
    </>
  );
};

export default ViedoCard;
