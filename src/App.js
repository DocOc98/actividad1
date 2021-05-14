import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { ToDoList } from './views/ToDoList';
import { Companies } from './views/Companies';
import { Cities } from './views/Cities';
import { Countries } from './views/Countries';
import { NavBar } from './views/NavBar';
import { NotFound} from './views/NotFound';

export class App extends React.Component {

  constructor(){
    super();
    this.state = {
      paises: ['Argentina', 'Italia', 'Uruguay', 'United Kingdom'],
      ciudades: [
        {nombre: 'La Rioja', pais: 0},
        {nombre: 'La Plata', pais: 0},
        {nombre: 'Benevento', pais: 1}
      ],
      companias: [{nombre: 'Ritex SRL', ciudad: 'La Rioja'}]
    }
  }

  deleteCountry = (nombre) => {
    this.setState({
      paises: this.state.paises.filter(pais => pais !== nombre)
    });
  }

  render (){
    return (
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route path="/" exact component={ToDoList}></Route>
          <Route path="/companies" exact render={(props)=> <Companies empresas={this.state.companias} ciudades={this.state.ciudades}></Companies>}></Route>
          <Route path="/cities" exact render={(props) => <Cities ciudades={this.state.ciudades} paises={this.state.paises}></Cities>}></Route>
          <Route path="/countries" exact render={(props)=> <Countries paises={this.state.paises}></Countries>}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Router>
    );
  }
  
}
export default App;
