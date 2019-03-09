import React from 'react';

const Comp = (props) => {
  return (
    <div>
      <h1>Band Member:</h1>
      <ul>
        <li><h3>Name: {props.firstName} {props.lastName}</h3></li>
        <li><p>Age: {props.age}</p></li>
        <li><p>Instrument: {props.instrument}</p></li>
        <li><p>Years Performed: {props.yearsPerformed}</p></li>
      </ul>
    </div>

  )
}

export default Comp;