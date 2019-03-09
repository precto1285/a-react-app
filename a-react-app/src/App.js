import React, { Component } from 'react';
import { Row, Col, Jumbotron, Card } from 'reactstrap';
import './App.css';
import Comp from './Comp';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bandMember: [
        { id: 1, firstName: 'Eddie', lastName: 'Bravo', age: 43, instrument: 'Saxophone', yearsPerformed: 18 },
        { id: 2, firstName: 'Chito', lastName: 'Olgark', age: 51, instrument: 'Piano', yearsPerformed: 30 },
        { id: 3, firstName: 'Teddy', lastName: 'Katigbak', age: 46, instrument: 'Trombone', yearsPerformed: 28 },
        { id: 4, firstName: 'Billy', lastName: 'Dumeguete', age: 48, instrument: 'Trumpet', yearsPerformed: 27 },
        { id: 5, firstName: 'Bebol', lastName: 'Chongbian', age: 55, instrument: 'Bass', yearsPerformed: 29 },
        { id: 6, firstName: 'Manuel', lastName: 'Lipido', age: 40, instrument: 'Guitar', yearsPerformed: 25 },
        { id: 7, firstName: 'Larry', lastName: 'Bocobo', age: 45, instrument: 'Drums', yearsPerformed: 20 },
        { id: 8, firstName: 'Boy', lastName: 'Cotabato', age: 60, instrument: 'Guitar', yearsPerformed: 34 },
        { id: 9, firstName: 'Pearl', lastName: 'Alay-ay', age: 33, instrument: 'Percussions', yearsPerformed: 16 },
        { id: 10, firstName: 'Lara', lastName: 'Kaharlika', age: 27, instrument: 'Vocals', yearsPerformed: 13 }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <div className="container my-3">
          <Jumbotron>
            <h1>The Band</h1>
          </Jumbotron>
          <Row>
            <Col className='col-sm-4'>
              <Comp
                firstName={this.state.bandMember[0].firstName}
                lastName={this.state.bandMember[0].lastName}
                age={this.state.bandMember[0].age}
                instrument={this.state.bandMember[0].instrument}
                yearsPerformed={this.state.bandMember[0].yearsPerformed}
              />
            </Col>
            <Col className='col-sm-4'>
              <Comp
                firstName={this.state.bandMember[1].firstName}
                lastName={this.state.bandMember[1].lastName}
                age={this.state.bandMember[1].age}
                instrument={this.state.bandMember[1].instrument}
                yearsPerformed={this.state.bandMember[1].yearsPerformed}
              />
            </Col>
            <Col className='col-sm-4'>
              <Comp
                firstName={this.state.bandMember[2].firstName}
                lastName={this.state.bandMember[2].lastName}
                age={this.state.bandMember[2].age}
                instrument={this.state.bandMember[2].instrument}
                yearsPerformed={this.state.bandMember[2].yearsPerformed}
              />
            </Col>
          </Row>
          <Row>
            <Col className='col-sm-4'>
              <Comp
                firstName={this.state.bandMember[3].firstName}
                lastName={this.state.bandMember[3].lastName}
                age={this.state.bandMember[3].age}
                instrument={this.state.bandMember[3].instrument}
                yearsPerformed={this.state.bandMember[3].yearsPerformed}
              />
            </Col>
            <Col className='col-sm-4'>
              <Comp
                firstName={this.state.bandMember[4].firstName}
                lastName={this.state.bandMember[4].lastName}
                age={this.state.bandMember[4].age}
                instrument={this.state.bandMember[4].instrument}
                yearsPerformed={this.state.bandMember[4].yearsPerformed}
              />
            </Col>
            <Col className='col-sm-4'>
              <Comp
                firstName={this.state.bandMember[5].firstName}
                lastName={this.state.bandMember[5].lastName}
                age={this.state.bandMember[5].age}
                instrument={this.state.bandMember[5].instrument}
                yearsPerformed={this.state.bandMember[5].yearsPerformed}
              />
            </Col>
          </Row>
          <Row>
            <Col className='col-sm-4'>
              <Comp
                firstName={this.state.bandMember[6].firstName}
                lastName={this.state.bandMember[6].lastName}
                age={this.state.bandMember[6].age}
                instrument={this.state.bandMember[6].instrument}
                yearsPerformed={this.state.bandMember[6].yearsPerformed}
              />
            </Col>
            <Col className='col-sm-4'>
              <Comp
                firstName={this.state.bandMember[7].firstName}
                lastName={this.state.bandMember[7].lastName}
                age={this.state.bandMember[7].age}
                instrument={this.state.bandMember[7].instrument}
                yearsPerformed={this.state.bandMember[7].yearsPerformed}
              />
            </Col>
            <Col className='col-sm-4'>
              <Comp
                firstName={this.state.bandMember[8].firstName}
                lastName={this.state.bandMember[8].lastName}
                age={this.state.bandMember[8].age}
                instrument={this.state.bandMember[8].instrument}
                yearsPerformed={this.state.bandMember[8].yearsPerformed}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Comp
                firstName={this.state.bandMember[9].firstName}
                lastName={this.state.bandMember[9].lastName}
                age={this.state.bandMember[9].age}
                instrument={this.state.bandMember[9].instrument}
                yearsPerformed={this.state.bandMember[9].yearsPerformed}
              />
            </Col>

          </Row>

        </div>
      </div >
    );
  }
}

export default App;
