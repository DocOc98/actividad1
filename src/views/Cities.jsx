import React from 'react';
import { getCountries, getPlaces, postPlaces, deletePlaces } from '../clients/todoClient';

export class Cities extends React.Component {
  constructor() {
    super();
    this.state = {
        newCity: {
            nombre: '',
            pais: 1
        },
        countriesfromAPI: [],
        citiesfromAPI: [],
        withError: false
    };
  }
  handleCiudad = (e) => {
    this.setState(prevState => ({
      newCity: {
        ...prevState.newCity,
        nombre: e.target.value
      }
    })
  );
  }
  handlePais = (e) => {
    this.setState(prevState => ({
      newCity: {
        ...prevState.newCity,
        pais: e.target.value
      }
    })
  );
  }
  handleNewCity = (evt) => {
    evt.preventDefault();
    /*if( this.state.newCity.nombre.trim() === '' || this.state.newCity.pais.trim() === ''){
        return false;
    }*/
    //this.props.addCity(evt, this.state.newCity)
    postPlaces(this.state.newCity);
  }

  deleteCity= (data) =>{
    deletePlaces(data);
  }

  componentDidMount() {
    getCountries().then(res => this.setState({
      countriesfromAPI: res
    }));
    getPlaces().then(res2 => this.setState({
      citiesfromAPI: res2
    }));
   }

  render() {
    return <div>
      <h3>Ciudades</h3>
      <form onSubmit={this.handleNewCity}>
        <input type="text" value={this.state.newCity.nombre} onChange={(e) => this.handleCiudad(e)} placeholder="ingrese ciudad"></input><br></br>
        <select onChange={(e) => this.handlePais(e)}>
          {
            this.state.countriesfromAPI.map((pais, id)=>{
              return <option key={id} value={pais.id}>{pais.name}</option>
            })
          }
        </select>
        <button type="submit" className="btn btn-primary m-2">CARGAR</button><hr></hr>
      </form>
      <ul>
        {
          this.state.citiesfromAPI.map((ciudad, id) => {
            return <li className="list-group-item mb-3" key={id}>
            <h5>
              {ciudad.name}
            </h5>
            <h6>
              {
                this.state.countriesfromAPI.map((pais)=>{
                  if(pais.id == ciudad.countrieId){
                    return <p>{pais.name}</p>
                  }
                })
              }
            </h6>
            <button onClick={() => this.deleteCity(ciudad)} className="btn btn-danger">Eliminar</button>
          </li>
          })
        }
      </ul>
    </div>
  }
}

