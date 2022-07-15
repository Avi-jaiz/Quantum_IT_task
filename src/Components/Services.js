import React from 'react';
import '../Styles/services.css';
import {Container, Button} from 'react-bootstrap';
import {RiMoneyDollarBoxLine} from 'react-icons/ri'
import {HiSpeakerphone}  from 'react-icons/hi';
import {BsPeopleFill} from 'react-icons/bs'


function Services() {
  return (
    <div className='services-main'>
    <Container >
<div className='services'>
    <h3>Our Services</h3>
    <p>Aliquam vestibulum, ex sit amet pretium ula<br/>, eu tristique libero lorem nec .</p>
    

 <div className='cards'>
    <div className='card'>
        <div className='card-icon'><HiSpeakerphone  className='icon'/></div>

        <div className='card-title'><h5>Financial Advice</h5></div>
        <div className='card-text'>
            <p>We provide all types of Financial Consultations</p>
        </div>

      


    </div>




    <div className='card'>
        <div className='card-icon'><RiMoneyDollarBoxLine className='icon'/></div>

        <div className='card-title'><h5>Financial Advice</h5></div>
        <div className='card-text'>
            <p>We provide all types of Financial Consultations</p>
        </div>

      


    </div>

    <div className='card'>
        <div className='card-icon'><BsPeopleFill className='icon'/></div>

        <div className='card-title'><h5>Constant Marketing</h5></div>
        <div className='card-text'>
            <p>We provide all types of Financial Consultations</p>
        </div>

      


    </div>
    
 </div>
 <Button>All Services</Button>



</div>
    </Container>
    </div>
  )
}

export default Services