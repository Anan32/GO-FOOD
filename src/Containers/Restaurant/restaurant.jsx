import React, { Component } from 'react'
import Header from '../../Components/header';
import Resto from '../../Components/resto';

export default class Restaurant extends Component {
  render() {
    return (
      <div>
         <Header judul="GO-FOOD" />
         <Resto />
      </div>
    )
  }
}
