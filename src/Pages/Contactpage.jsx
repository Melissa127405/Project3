import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import ButtonGroup from 'react-bootstrap/ButtonGroup';




function Contactpage () {
     // Declare a state variable for the doodle's name, type, first and last name, and email
const [DoodleName, setDoodleName] = useState("fluffy")
const [DoodleType, setDoodleType] = useState("goldendoodle")
const [FirstLast, setFirstLast] = useState("FrankReynolds")
const [ContactEmail, setContactEmail] = useState("frankreynolds.com")


function handleDoodleName(event) {
    console.log (event)
    console.log (event.target.value)
    console.log (event.target.name)
    setDoodleName({...DoodleName, doodleName: event.target.value })
}

function handleDoodleType(event) {
    console.log (event)
    console.log (event.target.value)
    console.log (event.target.name)
    setDoodleType({...DoodleType, doodletype: event.target.value })
}

function handleFirstLast(event) {
    console.log (event)
    console.log (event.target.value)
    console.log (event.target.name)
    setFirstLast({...FirstLast, firstLast: event.target.value })
}

function handleContactEmail(event) {
    console.log (event)
    console.log (event.target.value)
    console.log (event.target.name)
    setContactEmail({...ContactEmail, contactEmail: event.target.value })
}
    
return (
    <>
     <Container>
         <Row>
         <Col>
     <form> 
     <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Doodle's Name</Form.Label>
         <Form.Control 
         type="text"  
         name="DoodleName"
         value={DoodleName.DoodleName}
         onChange={handleDoodleName}
         />
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>What Type of Doodle?</Form.Label>
         <Form.Control 
         type="text "  
         name="DoodleType"
         value={DoodleType.DoodleType}
         onChange={handleDoodleType}
         />
         </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Your First and Last Name</Form.Label>
         <Form.Control 
         type="text"
         name="FirtsLadt"
         value={FirstLast.FirstLast}
         onChange={handleFirstLast}
         />
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Contact Email </Form.Label>
         <Form.Control 
         type="text" 
         name="contactEmail"
         value={ContactEmail.ContactEmail}
         onChange={handleContactEmail}
         />
     </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicCheckbox">
         <Form.Check type="checkbox" label="We will be in touch asap!" />
       </Form.Group>
         <Button variant="primary" type="submit">
         Submit
         </Button>
     </form> 
         </Col>
         </Row>
     </Container>
  </>
     );
 }


export default Contactpage;