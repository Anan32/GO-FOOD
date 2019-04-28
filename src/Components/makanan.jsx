import React, { Component } from 'react'
import {Jumbotron, Row, Col, Button} from 'reactstrap';
import Bodymakanan from './bodymakanan';
import {Link} from 'react-router-dom';

export default class Makanan extends Component {

    state={

        barang:[],

        daftar:[
        {
            id: 1,
            number: 0,
            price: 24000,
            nama: "Super Mantap",
            gambar: "http://www.kfcku.com/assets/gallery/1411958697.png"
        },
        {
            id: 2,
            number: 0,
            price: 8000,
            nama: "Fish Fillet",
            gambar: "http://www.kfcku.com/assets/gallery/1361800185.jpg"
        },
        {
            id: 3,
            number: 0,
            price: 8000,
            nama: "Twisty",
            gambar: "http://www.kfcku.com/assets/gallery/1361800286.jpg"
        },
        {
            id: 4,
            number: 0,
            price: 9000,
            nama: "Pepsi Can",
            gambar: "http://www.kfcku.com/assets/gallery/1361806304.jpg"
        },
        {
            id: 5,
            number: 0,
            price: 9000,
            nama: "Hazelnut Coffe",
            gambar: "http://www.kfcku.com/assets/gallery/1361801273.jpg"
        },
        {
            id: 6,
            number: 0,
            price: 13000,
            nama: "Fresh Brewed Coffe",
            gambar: "http://www.kfcku.com/assets/gallery/1361801939.jpg"
        },
    ],
    total:0
    };
    tambahtotalHarga= (harga , item) =>{
        this.setState({
            total: this.state.total + harga,
            barang:this.state.barang.concat(item)
        });
        sessionStorage.total = this.state.total + harga;
    };

    kurangtotalHarga= (harga, item) =>{
        this.setState({
            total: this.state.total - harga,
            barang:this.state.barang.filter(l=>l.id != item.id)
        });
        sessionStorage.total = this.state.total - harga;
    }
  render() {
      console.log(this.state.barang);
    return (
      <div>
        <Jumbotron>
            <h5>Keranjang makanan</h5>
            <ul>
            {this.state.barang.map((item)=> 
            <li>{item.nama}</li>
            )}   
            </ul>
            <hr></hr>
            <div align="center">
            <h4>Total Harga:{this.state.total}</h4>
            </div>
        </Jumbotron>
        <Row>
            {this.state.daftar.map((item)=> 
                <Col xs="12" md="6" lg="4" sm="4">
                    <Bodymakanan 
                    item={item}
                    tambahtotalHarga={this.tambahtotalHarga}
                    kurangtotalHarga={this.kurangtotalHarga}
                    daftar={this.state.daftar}
                    />   
                </Col>
            )}
        </Row>
        <Jumbotron align="center">
            <Button tag={Link} to="/pembayaran" color="info">Pembayaran</Button>
        </Jumbotron>
      </div>
    )
  }
}
