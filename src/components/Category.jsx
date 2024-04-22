import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen ,faTrash} from '@fortawesome/free-solid-svg-icons';
import { Col, Row } from 'react-bootstrap';
import ViedoCard from './ViedoCard';
import { addCategoryApi, deleteCategoryApi, getAllCategoryApi, getAviedo, updateCategoryApi } from '../services/AllAPI';

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Category = () => {

  const [show, setShow] = useState(false);

  const[allCategory,setCategoryData]=useState([]);

  const[dragViedoo,setDragViedoo]=useState(false);


  const[addCategory,setaddCategory]=useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getvideoCategory=async()=>{
    const response= await getAllCategoryApi();
    setCategoryData(response.data)
    setaddCategory(false);
 }
  useEffect(()=>{

    getvideoCategory();

  },[addCategory])
  console.log(allCategory);

  const[categoryName,setCategoryName]=useState('');

  const handleaddCategory=async ()=>{
    let reqbody={
      categoryName,
      allviedo:[]
    }
  const reponse= await addCategoryApi(reqbody);
  if(reponse.status>=200 && reponse.status<300){
    toast.success("Category Sucessfully")
    setaddCategory(true)
  }
  console.log(reponse);

  }


  const deleteCategory=async(id)=>{
   const response= await deleteCategoryApi(id);
   setaddCategory(true)
   console.log(response);
  }
// Function to prevent datalose
  const dragOver=(e)=>{
      e.preventDefault();
  }

  const viedoDrop=async(e,categoryId)=>{
    console.log(categoryId);
    const viedoId=e.dataTransfer.getData("viedoId");
       const {data}=await getAviedo(viedoId);
       console.log(data);
       const selecetdCategory=allCategory.find(item=>item.id===categoryId);
       if(selecetdCategory.allviedo.find(item=>item.id===data.id)){
        toast.error("Viedo Exist")
       }
       else{
            selecetdCategory.allviedo.push(data);  
            const response=await updateCategoryApi(categoryId,selecetdCategory)
            console.log(response);
            getvideoCategory();
       }

  }

  const handleDragStart=(e,categoryId,viedoId)=>{
            console.log(categoryId);
            console.log(viedoId);
            const sharedDta={
              categoryId,
              viedoId
            }
            // setDragViedoo(true);
            e.dataTransfer.setData("sharedData",  JSON.stringify(sharedDta))
  }
  return (
    <> 
       <div className="d-flex justify-content-center align-items-center mt-5 mt-md-0 mb-5 ">
         <button className="btn btn-warning w-100" onClick={handleShow}>Add New Category</button>
       </div>
       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> <FontAwesomeIcon className='text-warning' icon={faPen} /> Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='my-3 border rounded p-4'>
            <label htmlFor="cname" className='mb-3'>Category Name</label>
            <input id='cname' type="text" placeholder='Enter Category Name' onChange={(e)=>setCategoryName(e.target.value)} className='form-control'/>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleaddCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      {allCategory?.length>0?
          allCategory?.map(viedo=>( <>
           <div className="border border-secondary w-100 p-3 rounded mt-3"  droppable="true" onDragOver={(e)=>dragOver(e)} 
           onDrop={(e)=>viedoDrop(e,viedo.id)}>
               <div className="d-flex justify-content-between aligin-items-center">
              <p style={{color:'white'}}>{viedo.categoryName}</p>
              <button className='btn btn-danger' onClick={()=>deleteCategory(viedo.id)}> <FontAwesomeIcon icon={faTrash} /></button>
            </div>
            <Row>
            {viedo.allviedo.length!=0 &&
               viedo.allviedo.map((item)=>{
               return <Col sm={12} key={item.id} draggable onDragStart={(e)=>{
                handleDragStart(e,viedo.id,item.id)
               }}>
                <ViedoCard videoContent={item } isPresent={true} />
   
                 </Col>
               })
             }
            </Row>
          </div>
          </>)):

    <p className='text-warning mt-5'>No Category Added Yet</p>

        }

    </>
  )
}

export default Category
