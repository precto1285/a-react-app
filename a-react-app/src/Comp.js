import React, { useState } from 'react';
import { Card, Button } from 'reactstrap';

const Comp = (props) => {
  const [showPerson, setShowPerson] = useState({
    showData: false
  })
  return (
    <Card className='my-2'>
      <div className="card-header bg-danger text-white text-center">
        <h3>{props.firstName} {props.lastName}</h3>
      </div>
      <div className="card-body bg-secondary text-white">
        <ul>
          <li><p>Age: {props.age}</p></li>
          <li><p>Instrument: <span className="text-warning">{props.instrument}</span></p></li>
          <li><p>Years Performed: {props.yearsPerformed}</p></li>
        </ul>
      </div>
      <div className="card-footer text-center">
        <Button className="btn-success">Who Dis?</Button>
      </div>
    </Card>

  )
}

export default Comp;