import React, { Component } from 'react'
import Header from '../../Components/header';
import Body from '../../Components/body';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header judul="GO-JEK"/>
        <Body />
      </div>
    )
  }
}

