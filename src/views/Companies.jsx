import React from 'react';
import { getPlaces, getCountries, getOrganizations, postOrganizations, deleteOrganizations } from '../clients/todoClient';

export class Companies extends React.Component {
  constructor() {
    super();
    this.state = {
        newCompany: {
            nombre: '',
            ciudad: 1,
            pais: 1
        },
        organizations: [],
        countriesfromAPI: [],
        citiesfromAPI: [],
        withError: false
    };
  }
  handleCiudad = (e) => {
    this.setState(prevState => ({
      newCompany: {
        ...prevState.newCompany,
        ciudad: e.target.value
      }
    })
  );
  }
  handleCompania = (e) => {
    this.setState(prevState => ({
      newCompany: {
        ...prevState.newCompany,
        nombre: e.target.value
      }
    })
  );
  }
  handlePais = (e) => {
    this.setState(prevState => ({
      newCompany: {
        ...prevState.newCity,
        pais: e.target.value
      }
    })
  );
  }
  handleNewCompany = (evt) => {
    evt.preventDefault();
    /*if( this.state.newCompany.nombre.trim() === '' || this.state.newCompany.ciudad.trim() === ''){
        return false;
    }*/
    //this.props.addCompany(evt, this.state.newCompany)
    postOrganizations(this.state.newCompany);
  }

  deleteCompany= (data) =>{
    deleteOrganizations(data);
  }

  componentDidMount() {
    getCountries().then(res => this.setState({
      countriesfromAPI: res
    }));
    getPlaces().then(res2 => this.setState({
      citiesfromAPI: res2
    }));
    getOrganizations().then(res3 => this.setState({
      organizations: res3
    }));
   }


  render() {
    return <div>
      <h3>Compañias</h3>
      <form onSubmit={this.handleNewCompany}>
        <input type="text" onChange={(e) => this.handleCompania(e)} placeholder="ingrese compania"></input><br></br>
        <select onChange={(e) => this.handlePais(e)}>
          {
            this.state.countriesfromAPI.map((pais, index)=>{
              return <option key={index} value={pais.id}>{pais.name}</option>
            })
          }
        </select>
        <select onChange={(e) => this.handleCiudad(e)}>
          {
            this.state.citiesfromAPI.map((ciudad, index)=>{
              if(ciudad.countrieId==this.state.newCompany.pais){
                return <option key={index} value={ciudad.id}>{ciudad.name}</option>
              }
            })
          }
        </select>
        <button type="submit" className="btn btn-primary m-2">CARGAR</button><hr></hr>
      </form>
      <ul>
        {
          this.state.organizations.map((empresa, id) => {
            return <li className="list-group-item mb-3" key={id}>
            <h5>
              {empresa.name}
            </h5>
            <h6>
              { 
                this.state.citiesfromAPI.map((ciudad)=>{
                  if(ciudad.id == empresa.placeId){
                    return <p>{ciudad.name}</p>
                  }
                })
              }
            </h6>
            <button onClick={() => this.deleteCompany(empresa)} className="btn btn-danger">Eliminar</button>
          </li>
          })
        }
      </ul>
    </div>
  }

}

