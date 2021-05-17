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
        {nombre: 'La Rioja', pais: 'Argentina'},
        {nombre: 'La Plata', pais: 'Argentina'},
        {nombre: 'Benevento', pais: 'Italia'}
      ],
      companias: [{nombre: 'Ritex SRL', ciudad: 'La Rioja'}]
    }
  }

  deleteCountry = (nombre) => {
    this.setState({
      paises: this.state.paises.filter(pais => pais !== nombre)
    });
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

  NewCountry = (evt, pais) => {
    this.setState({
      paises: [...this.state.paises, pais]
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
          <Route path="/" exact component={ToDoList}></Route>
          <Route path="/companies" exact render={(props)=> <Companies delete={this.deleteCompany} addCompany={this.NewCompany} empresas={this.state.companias} ciudades={this.state.ciudades}></Companies>}></Route>
          <Route path="/cities" exact render={(props) => <Cities delete={this.deleteCity} addCity={this.NewCity} ciudades={this.state.ciudades} paises={this.state.paises}></Cities>}></Route>
          <Route path="/countries" exact render={(props)=> <Countries delete={this.deleteCountry} addCountry={this.NewCountry} paises={this.state.paises}></Countries>}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Router>
    );
  }
  
}
export default App;
