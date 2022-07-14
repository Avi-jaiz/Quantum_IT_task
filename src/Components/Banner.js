import React from 'react';
import '../Styles/banner.css'
import {Button} from 'react-bootstrap'
import working_people from '../Files/working_people.jpg'

function Banner() {
  return (
   

 <div className='banner'>
<div className='banner-content'>
  
<p className='text-body'>Ki Name Dhake Bolbo Tomake</p>

<h3>We are Consulting for Your Business Finance</h3>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar nulla et luctus ornare. Nam facilisis lectus mauris. Vestibulum semper libero nec elit interdum</p>

<Button bg='primary'>Start Now</Button>



</div>
<img src ={working_people} alt='work' className='demo' />
 </div>

   
  )
}

export default Banner


