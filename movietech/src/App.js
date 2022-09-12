import React from "react";
import Header from './components/Header/index.js'
import Footer from './components/Footer/index.js'

import Home from "./screen/Home/index"
import Favoritos from "./screen/Favoritos/index"
import Series from "./screen/Series/index"
import Peliculas from "./screen/Peliculas/index"
import NotFound from "./screen/NotFound/index"
import Detalle from './components/Detalle/Detalle'
import DetalleSerie from './components/DetalleSerie/DetalleSerie'
import { Route, Switch } from "react-router-dom"

function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path = "/" component={Home} />
        <Route path = "/favoritos" component={Favoritos} />
        <Route path = "/Series" component={Series} />
        <Route path = "/Peliculas" component={Peliculas} />
        <Route path= "/detalle/:id" component={Detalle} />
        <Route path="/detalleSerie/:id" component={DetalleSerie}/>
        <Route component={NotFound} />
      </Switch>  
      
      <Footer />
    </div>
  );
}

export default App;
