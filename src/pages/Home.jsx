import Add from "../components/Add"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons"
import View from "../components/View"
import Category from "../components/Category"
import { Link } from "react-router-dom";
import { useState } from "react"

const Home = () => {

 const [videoUploadStatus,setVideoUploadStatus]=useState({});

  return (
    <>
      <div className="mt-5 container d-flex justify-content-between">
        <Add setVideoUploadStatus={setVideoUploadStatus}></Add>
        <Link style={{textDecoration:'none'}} to={'/watch-history'} className="ms-auto"><h5 id="wh">Watch History <FontAwesomeIcon className="ms-2" icon={faClockRotateLeft} /></h5></Link>
      </div>
      <div className="row mt-5 pt-4">
        <div className="col-md-9">
          <h1>All Videos</h1>
          <View videoUploadStatus={videoUploadStatus} setVideoUploadStatus={setVideoUploadStatus}/>
        </div>
        <div className="col-md-3">
          <Category/>
        </div>
      </div>
    </>
  )
}

export default Home
