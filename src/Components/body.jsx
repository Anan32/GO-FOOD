import React, { Component } from 'react';
import { Card, Row, Col } from 'reactstrap';
import Counter from '../Components/counter' ;

export default class Body extends Component {
  
    state={
        tampilan:[
        {
            nama:"GO-FOOD",
            gambar:"https://www.loyalhackers.com/wp-content/uploads/2018/09/Go-Food-1200x628.jpg"
        },
        {
            nama:"GO-CAR",
            gambar:"https://join.go-jek.com/assets/gocar/img/og-gocar.jpg"
        },
        {
            nama:"GO-BOX",
            gambar:"https://pbs.twimg.com/media/CQsD5UYUkAA2Q68.png"
        },
        {
            nama:"GO-TIX",
            gambar:"http://www.sopsip.com/upload/sopsip.com/deal/18126/web_launch_ads_revised-03.jpg"
        },
    ],
    };

    render() {
    return (
      <div>
          <Card>
          <Row>
              {this.state.tampilan.map(item=> (
                <Col xs="12" md="6" lg="4" sm="4">
                <Counter gambar={item.gambar} name={item.nama} />
                </Col>
              ))}
          </Row>
          </Card>
      </div>
    );
  }
}
