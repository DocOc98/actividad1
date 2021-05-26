import React from 'react';
import { getCountries } from '../clients/todoClient';

export class Countries extends React.Component {
  constructor(){
    super()
    this.state = {
        name: '',
        paises: [],
        countriesfromAPI: [],
        withError: false
      };
}
  handlePais = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  handleNewCountry = (evt) => {
    evt.preventDefault();
    if( this.state.name.trim() === ''){
        return false;
    }
    this.props.addCountry(evt, this.state.name)
  }

  componentDidMount() {
    getCountries().then(res => this.setState({
      countriesfromAPI: res
    }))
   }

  render() {
    return <div>
      <h3>Paises</h3>
      <form onSubmit={this.handleNewCountry}>
        <input type="text" value={this.state.name} onChange={(e) => this.handlePais(e)} placeholder="ingrese Pais"></input><br></br>
        <button type="submit" className="btn btn-primary m-2">CARGAR</button><hr></hr>
      </form>
      <ul>
        {
          this.state.countriesfromAPI.map((pais, id) => {
            return  <li className="list-group-item mb-3" key={id}>
              <h5>{pais.name}</h5>
              <button onClick={() => this.state.delete(pais.id)} className="btn btn-danger">Eliminar</button>
            </li>
          })
        }
      </ul>
    </div>;
  }

}
