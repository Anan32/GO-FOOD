import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Home from './Containers/Home';
import Restaurant from './Containers/Restaurant';
import Menu from './Containers/Menu';
import Pembayaran from './Containers/Pembayaran/pembayaran';

class App extends Component{

render() {
  return (
    <div>
    <switch>
      <Route path="/" exact component={Home} />
      <Route path="/restaurant" component={Restaurant} />
      <Route path="/menu" component={Menu} />
      <Route path="/pembayaran" component={Pembayaran} />
    </switch>
    </div>
    
  );
}
}

export default App;
