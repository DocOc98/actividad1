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
      companias: [{nombre: 'Ritex SRL', ciudad: 0}]
    }
  }

  deleteCity = (nombre) => {
    this.setState({
      ciudades: this.state.ciudades.filter(ciudad => ciudad !== nombre)
    });
  }
  deleteCompany = (nombre) => {
    this.setState({
      companias: this.state.companias.filter(empresa => empresa !== nombre)
    });
  }

  NewCity = (evt, ciudad) => {
    this.setState({
      ciudades: [...this.state.ciudades, ciudad]
    });
  }
  NewCompany = (evt, compania) => {
    this.setState({
      companias: [...this.state.companias, compania]
    });
  }

  render (){
    return (
      <Router>
        <NavBar></NavBar>
        <Switch>
          
          <Route path="/" exact render={(props)=><ToDoList paises={this.state.paises} empresas={this.state.companias} ciudades={this.state.ciudades}></ToDoList>}></Route>
          <Route path="/companies" exact render={(props)=> <Companies></Companies>}></Route>
          <Route path="/cities" exact render={(props) => <Cities></Cities>}></Route>
          <Route path="/countries" exact render={(props)=> <Countries></Countries>}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Router>
    );
  }
  
}
export default App;
