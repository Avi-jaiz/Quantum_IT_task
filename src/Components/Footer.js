import React from 'react';
import '../Styles/footer.css';
import {InputGroup,Form, Button} from 'react-bootstrap'
function Footer() {
  return (
    <div className='footer'>
<div className='newsletter'>
    <h3>Subscribe Our Newsletter
        for more Update
    </h3>

    <p><strong>tristique quis blandit id, tempor nec tortor. Nullam </strong></p>
</div>


<div className='input-area'>
<InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        
      </InputGroup>
      <Button className ='subscribe-btn'>Subscribe</Button>
</div>

    </div>
  )
}

export default Footer