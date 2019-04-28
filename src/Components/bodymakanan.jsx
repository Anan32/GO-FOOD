import React, { Component } from 'react'
import {Card, Navbar, CardImg, CardBody, CardSubtitle, Button} from 'reactstrap'

export default class Bodymakanan extends Component {
  state={
      angka:0
  };
        tambah= (id)=> {
            this.setState({
                angka: this.state.angka + 1
            });
            const y =this.props.daftar.find(item => item.id===id)
            this.props.tambahtotalHarga(this.props.item.price, y);
            console.log(y)
        };
        kurang= (id)=> {
            if (this.state.angka === 0) {
                return;
            }
            this.setState({
                angka: this.state.angka - 1
            });
            const y =this.props.daftar.find(item => item.id===id)
            this.props.kurangtotalHarga(this.props.item.price, y);
        };

    render() {
        const {nama, gambar, price,id} =this.props.item
    return (
      <div>
        <Card>
            <CardImg top width="100%" src={gambar} />
            <CardBody>
                <h3>{nama}</h3>
                <br></br>
                <CardSubtitle>Pesan Sekarang</CardSubtitle>
                <p>Harga : Rp.{price}</p>
                <hr color="green"></hr>
                <Navbar style={{backgroundColor: "white"}} color="faded" light>
                <Button onClick={()=>this.tambah(id)} color="success">+</Button>
                <h4>{this.state.angka}</h4>
                <Button onClick={()=>this.kurang(id)} color="danger">-</Button>
                </Navbar>
            </CardBody>   
        </Card>
      </div>
    );
  }
}
