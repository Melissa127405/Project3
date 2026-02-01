import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import ButtonGroup from 'react-bootstrap/ButtonGroup';




function Contactpage () {
     const [doodleName, setDoodleName] = React.useState({   doodleName: '',   doodleType: '',    firstLast: '',    contactEmail: ''    });
 
     function handleChange(event) {
       setDoodleName({...doodleName, [event.target.name]: event.target.value });
       console.log (event.target.name);
     }
     
  return (
     <Container>
         <Row>
         <Col>
     <form> 
     <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Doodle's Name</Form.Label>
         <Form.Control 
         type="text"  
         name="doodleName"
         value={doodleName.doodleName}
         onChange={handleChange}
         />
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>What Type of Doodle?</Form.Label>
         <Form.Control 
         type="text "  
         name="doodleType"
         value={doodleName.doodleType}
         onChange={handleChange}
         />
         </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Your First and Last Name</Form.Label>
         <Form.Control 
         type="text"
         name="firstLast"
         value={doodleName.firstLast}
         onChange={handleChange}
         />
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Contact Email </Form.Label>
         <Form.Control 
         type="text" 
         name="contactEmail"
         value={doodleName.contactEmail}
         onChange={handleChange}
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
 
     );
 }


export default Contactpage;