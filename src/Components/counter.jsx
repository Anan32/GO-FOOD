import React, { Component } from 'react'
import { Card, CardImg, CardBody, Button } from 'reactstrap';
import {Link} from 'react-router-dom';

export default class Counter extends Component {
  render() {
    return (
      <div>
          <br></br>
        <Card>
        <CardImg top width="100%" src={this.props.gambar} />
        <CardBody align="center">
          <Button tag={Link} to="/restaurant" color="success">{this.props.name}</Button>
        </CardBody>
      </Card>
      </div>
    )
  }
}
