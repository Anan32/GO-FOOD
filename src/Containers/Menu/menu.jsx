import React, { Component } from 'react'
import Header from '../../Components/header';
import Makanan from '../../Components/makanan';

export default class Menu extends Component {
  render() {
    return (
      <div>
        <Header judul="GO-FOOD" />
        <Makanan />
      </div>
    )
  }
}
