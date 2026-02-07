import React, { useState } from "react";
import GroomOption from './Groom/GroomOption';
import doodlechair from '../assets/doodlechair.jpg';

function GroomPage() {
  const [options, setOptions] = useState([
    {
      id: 0,
      toDo: "Option",
      ears: "Square",
      tail: "Fan",
      feet: "Tight",
      body: "Short",
      head: "Full",
    },
    {
      id: 1,
      toDo: "Option",
      ears: "Round",
      tail: "Carrot",
      feet: "Round",
      body: "Long",
      head: "Fusion",
    },
    {
      id: 2,
      toDo: "Option",
      ears: "natural",
      tail: "natural",
      feet: "natural",
      body: "natural",
      head: "natural",
    },
  ]);



return (
  <>
    <div className="groom-flex">
      <h2>Please choose from each Doodle area listed below.</h2>
    <img
      src={doodlechair} 
      alt="doodle in chair" 
      classname="doodle-image1"
      style={{ width: "200px", borderRadius: "10px", marginTop: "1rem" , marginBottom: "1rem"}}
      />
    <GroomOption options={options} setOptions={setOptions} />
      <h3>You are also welcome to add a style, if we don't have it listed.</h3>
    </div>
  </>
);

}
export default GroomPage;

  
    
 

