import React from "react";
import Header from './components/Header/index.js'
import Footer from './components/Footer/index.js'

import Home from "./screen/Home/index"
import Favoritos from "./screen/Favoritos/index"
import Populares from "./screen/Populares/index"
import Estrenos from "./screen/Estrenos/index"
import { Route, Switch } from "react-router-dom"

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path = "/" component={Home}/>
        <Route path = "/favoritos" component={Favoritos}/>
        <Route path = "/populares" component={Populares}/>
        <Route path = "/estrenos" component={Estrenos}/>
      </Switch>  
      
      
      <Footer />
    </div>
  );
}

export default App;
