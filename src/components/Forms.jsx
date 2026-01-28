import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Forms () {

    return (
        <form> 
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Doodle's Name</Form.Label>
        <Form.Control type="name" placeholder="Enter Name" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>What Type of Doodle?</Form.Label>
        <Form.Control type="type of " placeholder="Doodle Type" />
      </Form.Group>
      

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Your First and Last Name</Form.Label>
        <Form.Control type="first last  " placeholder="First , Last " />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contact Email </Form.Label>
        <Form.Control type="type of " placeholder="Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="We will be in touch asap!" />
      </Form.Group>


      <Button variant="primary" type="submit">
        Submit
      </Button>
    </form> 
    )
}

export default Forms;