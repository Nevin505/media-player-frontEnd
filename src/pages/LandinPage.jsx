import { Col, Row } from "react-bootstrap"
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const LandinPage = () => {
  return (
    <>
    <div className="row p-5 my-5">
      <div className="col-md-1"></div>
      <div className="col-md-5">
       <h3 >Welcome to  <span className="text-warning">Media Player</span></h3>
       <p style={{textAlign:"justify"}} className="mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur distinctio ut ab vel qui amet doloribus ea explicabo, optio earum. Fugiat eveniet aliquid illo, assumenda provident quia rerum eaque reiciendis!
       Nisi minus repellendus sequi deserunt cupiditate pariatur fugit consequuntur iste, quisquam quaerat alias similique unde necessitatibus eum officiis, accusantium et voluptates aut minima nihil placeat nam praesentium perferendis. Voluptas, velit.</p>
       <Link to={'/home'}>
       <button className="mt-4 btn btn-warning p-2">Get Started</button></Link>
      </div>
      <div className="col-md-1"></div>
      <div className="col-md-5 p-5 d-flex justify-content-center align-items-center">
        <img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="image" className="w-75"/>
      </div>
    </div>
     <div>
     <h3 className="text-center my-4">Features</h3>
     <Row className="mb-5">
   
      <Col md={1}></Col>
      <Col md={3} className="p-5 p-md-0">
      <Card style={{ width: '100%' }} className="p-4">
      <Card.Img variant="top" src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://gifsoutloud.com/wp-content/uploads/2020/12/source.gif" style={{width:'100%',height:'300px'}} />
      <Card.Body>
        <Card.Title>Manging Viedo</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </Col>
      <Col md={4} className="d-flex justify-content-center ">
      <Card style={{ width: '80%' }} className="p-4" >
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyn_z7-m4LIdCDg9nTfHWs024FFgRerlSXnmp3rnFBQA&s"  style={{width:'100%',height:'300px'}} />
      <Card.Body>
        <Card.Title>Categorize Viedo</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </Col>
      <Col md={3}  className="p-5 p-md-0">
      <Card style={{ width: '100%' }} className="p-4  ">
      <Card.Img variant="top" src="https://gifdb.com/images/high/upbeat-music-sound-wave-1uotbww4xs4eka6o.gif" style={{width:'100%',height:'300px'}}  />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </Col>
      <Col md={1}></Col>

    </Row>
     </div>

     <div className="my-5 row">
               <div className="col-md-1"></div>
               <div className="col-md-10 border border-white border-2 rounded">
                <Row>
                  <Col md={6} className="p-3 ">
                    <h3 className="text-warning mt-5">Simple Fast and Powerfull</h3>
                      <p><span className="fs-4">Play Everything:</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur veniam ratione beatae vel quidem quasi dolor officiis doloremque laudantium? Consequatur alias tenetur praesentium nulla cumque dignissimos suscipit, provident unde ipsum.</p>
                      <p><span className="fs-4">Play Everything:</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur veniam ratione beatae vel quidem quasi dolor officiis doloremque laudantium? Consequatur alias tenetur praesentium nulla cumque dignissimos suscipit, provident unde ipsum.</p>
                      <p><span className="fs-4 ">Play Everything:</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur veniam ratione beatae vel quidem </p>
                  </Col>
                  <Col md={6} className="p-3">
                  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/3L3IWG0L3f4" title="Krishna Song Making Video | Malayalee From India | Nivin Pauly | Anaswara Rajan | Dijo Jose Antony" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </Col>

                </Row>
               </div>
               <div className="col-md-1"></div>
               
     </div>
    </>
  )
}

export default LandinPage
