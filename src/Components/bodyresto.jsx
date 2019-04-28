import React, { Component } from 'react'
import { Card, CardImg, CardBody, Button } from 'reactstrap';
import {Link} from 'react-router-dom';

export default class Bodyresto extends Component {
  render() {
    return (
      <div>
          <br></br>
        <Card>
            <CardImg top width="100%" src={this.props.picture} />
            <CardBody align="center">
                <Button tag={Link} to="/menu" color="success">{this.props.jeneng}</Button>
            </CardBody>
        </Card>
      </div>
    )
  }
}
