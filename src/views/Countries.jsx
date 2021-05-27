import React from 'react';
import { deleteCountries, getCountries, postCountries } from '../clients/todoClient';

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
    postCountries(this.state.name);
  }

  deleteCountry = (data) =>{
    deleteCountries(data);
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
        <input type="text" name="name" value={this.state.name} onChange={(e) => this.handlePais(e)} placeholder="ingrese Pais"></input><br></br>
        <button type="submit" className="btn btn-primary m-2">CARGAR</button><hr></hr>
      </form>
      <ul>
        {
          this.state.countriesfromAPI.map((pais, id) => {
            return  <li className="list-group-item mb-3" key={id}>
              <h5>{pais.name}</h5>
              <button onClick={() => this.deleteCountry(pais)} className="btn btn-danger">Eliminar</button>
            </li>
          })
        }
      </ul>
    </div>;
  }

}
