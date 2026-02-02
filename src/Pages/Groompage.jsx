import React from 'react';
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
const [items, setItems] = React.useState([
  {id: 1, toDo: 'Option', ears: 'Square', tail: 'Fan', feet: 'Tight', body: 'Short', head: 'Full'},
  {id: 2, toDo: 'Option', ears: 'Round', tail: 'Carrot', feet: 'Round', body: 'Long', head: 'Fusion'},
  {id: 3, toDo: 'Option', ears: 'natural', tail: 'natural', feet: 'natural', body: 'natural', head: 'natural'}
]);

function handleDelete(event, naturalindex) {
  console.log('Deleting item at index:', naturalindex);
  console.log('New items:', items.filter((_, i) => i!== naturalindex));
  const newItems = items.filter((_, i) => i!== naturalindex);
  setItems(newItems);
}

function handleUpdate(event, naturalindex) {
  console.log('Updating item at index:', naturalindex);
  console.log('New items:', items.map((item, i) => i === naturalindex? {...item, [event.target.name]: event.target.value} : item));
  const newItems = items.map((item, i) => i === naturalindex? {...item, [event.target.name]: event.target.value} : item);
  setItems(newItems);
}


    return (
    <Container>
      <Row>
        <Col>
    <Table striped hover bordered  >
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
          <td>Option A</td>
          <td>square</td>
          <td>fan</td>
          <td>tight</td>
          <td>short</td>
          <td>full</td>
        </tr>
        <tr>
          <td>Option B</td>
          <td>Round</td>
          <td>carrot</td>
          <td>messy</td>
          <td>long</td>
          <td>fusion</td>
        </tr>
         <tr>
          <td>Option C</td>
          <td>natural</td>
          <td>natural</td>
          <td>natural</td>
          <td>natural</td>
          <td>natural</td>
        </tr>
          </tbody>
        <tfoot>  
          <td>
            <Button variant="dark" onClick={(event)=>handleDelete(event)}>Delete</Button>&nbsp;
            <Button variant="Primary" onClick={(event)=>handleUpdate(event)}>Update</Button>
          </td>
        </tfoot>
        <tr>
        </tr>
     </Table>
        </Col>
      </Row>
    </Container>
    
     )
}


export default GroomPage;