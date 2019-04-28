import React, { Component } from 'react'
import { Card, Row, Col} from 'reactstrap';
import Bodyresto from '../Components/bodyresto';

export default class Resto extends Component {
  
    state={
        toko:[
         {
             nama:"KFC",
             gambar:"https://www.nrn.com/sites/nrn.com/files/styles/article_featured_standard/public/yum-blames-flat-same-store-sales-kfc-chicken-shortage_0.gif?itok=m6BfVdAf",
         },
         {
            nama:"Pizza Hut",
            gambar:"https://moneyinc.com/wp-content/uploads/2019/01/Pizza-Hut_1.jpg",
        },
        {
            nama:"Burger King",
            gambar:"https://hilbersinc.com/wp-content/uploads/2011/11/BK-Woodland_00711.jpg",
        },
        {
            nama:"MCD",
            gambar:"http://s.thestreet.com/files/tsc/v2008/photos/contrib/uploads/2aaf0326-3ec9-11e6-891d-0b9d79890050.png",
        },
        ],
    };

    render() {
    return (
      <div>
          <Card>
              <Row>
                {this.state.toko.map(item=> (
                <Col xs="12" md="6" sm="6">
                    <Bodyresto picture={item.gambar} jeneng={item.nama} />
                </Col>
                ))}
              </Row>
          </Card>
      </div>
    )
  }
}
