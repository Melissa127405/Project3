import React from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function GroomOption({ options, setOptions }) {
const [newOption, setNewOption] = React.useState({
   toDo: "Option",
    toDoDone: false,
   ears: "",
  earsDone: false,
  tail: "",
  tailDone: false,
  feet: "",
  feetDone: false,
  body: "",
  bodyDone: false,
  head: "",
  headDone: false

});



function handleChange(e) {
  const { name, value } = e.target;
  setNewOption(prev => ({ ...prev, [name]: value }));
}

 function toggleDone(field) {
  console.log(`Toggled ${field}`);
  setNewOption(prev => ({
    ...prev,
    [field]: !prev[field]
  }));
}

function handleAdd() {
  const newItem = {
    id: Date.now(),
    ...newOption
  };


  setOptions(prev => [...prev, newItem]);

  // Clear the inputs
  setNewOption({
  toDo: "Option",
  toDoDone: false,
  ears: "",
  earsDone: false,
  tail: "",
  tailDone: false,
  feet: "",
  feetDone: false,
  body: "",
  bodyDone: false,
  head: "",
  headDone: false
});
}

function handleDelete(id) {
    const results = options.filter(option => option.id !== id);
    setOptions(results);
  }

  return (
  <>
    <div className="table-responsive">
      <Table striped bordered hover className="table-shrink">
        <thead>
          <tr>
            <th>Option</th>
            <th>Ears</th>
            <th>Tail</th>
            <th>Feet</th>
            <th>Body</th>
            <th>Head</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {options.map(option => (
            <tr key={option.id}>
              <td>{option.toDo}</td>
              <td>{option.ears}</td>
              <td>{option.tail}</td>
              <td>{option.feet}</td>
              <td>{option.body}</td>
              <td>{option.head}</td>
              <td>
                <Button
                  variant="light"
                  onClick={() => handleDelete(option.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
 <tr>
  <td className={newOption.toDoDone ? "strike" : "" }>
    {newOption.toDo}
    <Button
      variant="light"
      size="sm"
      onClick={() => toggleDone("toDoDone")}
    >
      ✓
    </Button>
  </td>

  <td className={newOption.earsDone? "strike" : "" }>
    <input
      name="ears"
      value={newOption.ears}
      onChange={handleChange}
      className={newOption.earsDone ? "input-strike" : ""}
/>
    <Button
      variant="light"
      size="sm"
      onClick={() => toggleDone("earsDone")}
    >
      ✓
    </Button>
  </td>

  <td className={newOption.tailDone ? "strike" : ""}>
    <input
      name="tail"
      value={newOption.tail}
      onChange={handleChange}
      className={newOption.tailDone ? "input-strike" : ""}
  />
    <Button
      variant="light"
      size="sm"
      onClick={() => toggleDone("tailDone")}
    >
      ✓
    </Button>
  </td>

  <td className={newOption.feetDone ? "strike" : ""}>
    <input
      name="feet"
      value={newOption.feet}
      onChange={handleChange}
      className={newOption.feetDone ? "input-strike" : ""}
  />
    <Button
      variant="light"
      size="sm"
      onClick={() => toggleDone("feetDone")}
    >
      ✓
    </Button>
  </td>

  <td className={newOption.bodyDone ? "strike" : ""}>
    <input
      name="body"
      value={newOption.body}
      onChange={handleChange}
      className={newOption.bodyDone ? "input-strike" : ""}
 />
    <Button
      variant="light"
      size="sm"
      onClick={() => toggleDone("bodyDone")}
    >
      ✓
    </Button>
  </td>

  <td className={newOption.headDone ? "strike" : ""}>
    <input
      name="head"
      value={newOption.head}
      onChange={handleChange}
      className={newOption.headDone ? "input-strike" : ""}
 />
    <Button
      variant="light"
      size="sm"
      onClick={() => toggleDone("headDone")}
    >
      ✓
    </Button>
  </td>

  <td>
    <Button variant="dark" onClick={handleAdd}>
      Add
    </Button>
  </td>
</tr>
     </Table>
    </div>
  </>
  );
}

export default GroomOption;