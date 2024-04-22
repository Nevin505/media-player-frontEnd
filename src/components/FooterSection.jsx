import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faVideo } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { Link } from "react-router-dom"

const FooterSection = () => {
    return (
        <div className="row p-5">
         <div className="col-md-4">
          <h4 className="mb-3">  <FontAwesomeIcon icon={faVideo} className="text-warning me-3" />Media Player</h4>
          <p style={{textAlign:'justify'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo harum consequatur recusandae eaque rem quidem. Magnam excepturi sed libero, ab odio sint rem minus non debitis cumque a, quibusdam minima?</p>
         </div>
         <div className="col-md-1"></div>
         <div className="col-md-2">
           <h4> Links</h4>
           <Link to={'/'}><p className="mt-3">Landing Page</p></Link>
          <Link to={'/home'}><p>Home Page</p></Link>
          <Link to={'/watch-history'}><p>Watch History</p></Link>
          <Link></Link>
         </div>
         <div className="col-md-2">
            <h4>Guides</h4>
            <p  className="mt-3">React</p>
            <p>React-Boostrap</p>
            <p>Bootswatch</p>
         </div>
         <div className="col-md-3">
            <h3>Contacts</h3>
            <div className="d-flex mt-3">
                <input type="text" placeholder="Email-id" />
                <button className="btn btn-warning ms-3">Subscribe</button>
            </div>
            <div className="d-flex justify-content-between mt-3 ">
            <FontAwesomeIcon size="2xl" icon={faInstagram} />
            <FontAwesomeIcon size="2xl" icon={faFacebook} />
            <FontAwesomeIcon size="2xl" icon={faLinkedin} />


            </div>
         </div>
        </div>
      )
    }
    
export default FooterSection
