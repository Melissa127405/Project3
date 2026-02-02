import React, {useState} from 'react'
import GroomOption from './Components/Groom/GroomOption';

export default function GroomOptions() {
  const [options, setOptions] = useState([{
    id: 0, toDo: 'Option', ears: 'Square', tail: 'Fan', feet: 'Tight', body: 'Short', head: 'Full'},
    {id: 1, toDo: 'Option', ears: 'Round', tail: 'Carrot', feet: 'Round', body: 'Long', head: 'Fusion'},
    {id: 2, toDo: 'Option', ears: 'natural', tail: 'natural', feet: 'natural', body: 'natural', head: 'natural'

    }]);

return (
  // Add your code here to render the GroomOptions component with the provided options array.
  <>
  <div>Things To Do</div>
    <GroomOption options={options} setOptions={setOptions}/>
   </>
  )
}

