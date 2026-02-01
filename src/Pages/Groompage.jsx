import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

 

function GroomPage () {

    return (
       <Container>
      <Row>
        <Col>
    <Table hover bordered  >
      <thead>
        <tr>
          <th>To Do</th>
          <th>#1 Ears</th>
          <th>#2 Tail</th>
          <th>#3 Feet</th>
          <th>#4 Body</th>
          <th>#5 Head</th>
       </tr>
      </thead>
      <tbody>
        <tr>
          <td>Option</td>
          <td>square</td>
          <td>fan</td>
          <td>tight</td>
          <td>short</td>
          <td>full</td>
        </tr>
        <tr>
          <td>Option</td>
          <td>round</td>
          <td>carrot</td>
          <td>round</td>
          <td>Long</td>
          <td>fusion</td>
        </tr>
        <tr>
        </tr>
      </tbody>
    </Table>
    <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
        <ButtonGroup className="me-2" aria-label="First group">
          <Button variant="secondary">1</Button>
          <Button variant="secondary">2</Button>
          <Button variant="secondary">3</Button>
          <Button variant="secondary">4</Button>
          <Button variant="secondary">5</Button>
        </ButtonGroup>
        <InputGroup>
          <InputGroup.Text id="btnGroupAddon">save</InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Add # for natual option"
            aria-label="Add # for natual option"
            aria-describedby="btnGroupAddon"
          />
        </InputGroup>
      </ButtonToolbar>
   </Col>
      </Row>
    </Container>
    

    )
}


export default GroomPage;