import React, { Component } from 'react'
import Header from '../../Components/header';
import Payment from '../../Components/payment';

export default class Pembayaran extends Component {
  render() {
    return (
      <div>
        <Header judul="GO-FOOD"/>
        <Payment />
      </div>
    )
  }
}
