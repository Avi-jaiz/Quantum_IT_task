import React from 'react';
import {Container,Card, Button,Row,Col} from 'react-bootstrap';
import discussion from '../Files/discussion.webp';
import {MdOutlineConstruction} from 'react-icons/md';
import {BsSunglasses} from 'react-icons/bs';
import {TbBrandBing} from 'react-icons/tb';
import {DiJqueryLogo} from 'react-icons/di'
import '../Styles/experience.css';

function Experience() {
  return (
    <Container>
      <div className='experince-main'>
<div className='experience'>

    <div className='experince-content'>
    <h3>
        We have Many Years Of Experience in Consulting Business
    </h3>

    <p>
    Vestibulum fermentum eu lectus id porttitor. Morbi gravida neque et justo feugiat, nec sagittis mauris dapibus.
    </p>

    <Button className='experience-btn'>Know more</Button>
    </div>
 

    <img src={discussion} alt='discussion' className='discussion-pic'/>

</div>

<Row className="justify-content-md-center row-item">
        <Col xs lg="2" className='item'>
          <MdOutlineConstruction className='icons'/>
       <Row >
        <Col>
        Construction</Col>
       </Row>
        </Col>

        <Col xs lg="2" className='item'>
          <DiJqueryLogo className='icons'/>
       <Row >
        <Col>
        DUMMY-LOGO</Col>
       </Row>
        </Col>

        <Col xs lg="2" className='item'>
          <BsSunglasses className='icons'/>
       <Row >
        <Col>
        Random Logo</Col>
       </Row>
        </Col>

        <Col xs lg="2" className='item'>
          <TbBrandBing className='icons'/>
       <Row >
        <Col>
        Random Brand</Col>
       </Row>
        </Col>

      

       
        
      </Row>
</div>

 



    </Container>
  )
}

export default Experience