import React, { Component } from 'react'
import {Jumbotron, Container, Row} from 'reactstrap';

export default class Payment extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
            <Container fluid>
            <h1>Terima Kasih</h1>
            <hr color="black"></hr>
            <h5>Telah memesan dari KFC</h5>
            </Container>
        </Jumbotron>
      </div>
    )
  }
}
