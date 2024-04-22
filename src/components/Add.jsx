import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCloudArrowUp ,faFilm} from "@fortawesome/free-solid-svg-icons"
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { uploadViedoApi } from "../services/AllAPI";

const Add = ({setVideoUploadStatus}) => {
    const [show, setShow] = useState(false);

    const[viedo,setViedo]=useState({
      caption:"",
      imageUrl:"",
      embedLink:""
    })
  console.log(viedo);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getEmbeddedLink=(e)=>{
      const text=e.target.value;
       if(text.startsWith('https://youtu.be/'))
       {
        const link= `https://www.youtube.com/embed/${text.slice(17,28)}`;
        setViedo({...viedo,embedLink:link})
      }
      else{
        const link= `https://www.youtube.com/embed/${text.slice(-11)}`;
        setViedo({...viedo,embedLink:link})
      }
    }
    // console.log(viedo);

    const handleUpload= async()=>{
            const { caption,
            imageUrl,
            embedLink}=viedo;

            if(!caption || !imageUrl || !embedLink){
                    toast.info("Please Fill the form")
            }
            else{
              const response=await uploadViedoApi(viedo);
              console.log(response);
              setVideoUploadStatus(response.data)
              if(response.status>=200 && response.status<300){
                toast.success("Viedo Uploaded Sucessfully")
                setViedo({
                   caption:"",
                   imageUrl:"",
                    embedLink:""
                })
                handleClose();
              }
              else{
                toast.error("Something Went Wrong")
                console.log(response);
              }
            }
    }

  return (
    <>
    <div>
      <h5 >Upload New Viedo <FontAwesomeIcon  className="ms-2" icon={faCloudArrowUp} onClick={handleShow} /></h5>
      
      
    </div>
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title><FontAwesomeIcon   className="me-2 text-warning"  icon={faFilm} />Upload Viedos</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <p>Please Fill in The Following Details</p>
         <form action="" className="border border-2 mt-3 p-3">
            <div className="mb-3">
 
            <input type="text"  placeholder="Enter the Caption" className="form-control " onChange={(e)=>{
              setViedo({...viedo,caption:e.target.value})
            }}/>
            </div>
            <div className="mb-3">
            <input type="text"  placeholder="Enter the image Url" className="form-control"  onChange={(e)=>{
              setViedo({...viedo,imageUrl:e.target.value})
            }}/>
            </div>
            <div className="mb-3">
            <input type="text"   placeholder="Enter The viedo Link" className="form-control"  onChange={(e)=>getEmbeddedLink(e)}/>
            </div>
         </form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Cancel
      </Button>
      <Button variant="warning" onClick={handleUpload}>
        Upload
      </Button>
    </Modal.Footer>
  </Modal>

  <ToastContainer theme="colored" position="top-center" autoClose={2000}/>
    </>
  )
}

export default Add
