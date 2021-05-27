import React from 'react';
import { getCountries, getPlaces, getOrganizations } from '../clients/todoClient';

export class Form extends React.Component {
  constructor() {
    super();
    this.state = {
        newJob: {
            position: '',
            description: '',
            empresa: 1,
            ciudad: 1,
            pais: 1
        },
        countriesfromAPI: [],
        citiesfromAPI: [],
        organizations: [],
        withError: false
    };
  }

  handleNewJobName = (evt) => {
    this.setState(prevState => ({
        newJob: {
          ...prevState.newJob,
          position: evt.target.value
        }
      })
    );
  }

  handleNewJobDescription = (evt) => {
    this.setState(prevState => ({
        newJob: {
          ...prevState.newJob,
          description: evt.target.value
        }
      })
    );
  }

  handleNewJobCompany = (evt) => {
    this.setState(prevState => ({
        newJob: {
          ...prevState.newJob,
          empresa: evt.target.value
        }
      })
    );
  }

  handleNewJobCity = (evt) => {
    this.setState(prevState => ({
        newJob: {
          ...prevState.newJob,
          ciudad: evt.target.value
        }
      })
    );
  }

  handleNewJobCountry = (evt) => {
    this.setState(prevState => ({
        newJob: {
          ...prevState.newJob,
          pais: evt.target.value
        }
      })
    );
  }

  handleNewJobSubmit = (evt) => {
    evt.preventDefault();
    if( this.state.newJob.position.trim() === '' 
    ){
        return false;
    }
    this.props.onNewJobSubmit(evt, this.state.newJob)
  }

  componentDidMount() {
    getCountries().then(res => this.setState({
      countriesfromAPI: res
    }))
    getPlaces().then(res2 => this.setState({
      citiesfromAPI: res2
    }))
    getOrganizations().then(res3 => this.setState({
      organizations: res3
    }))
   }

  render() {
    return (
        <form onSubmit={this.handleNewJobSubmit}>
          <label>Name:</label>
          <input type="text" name="position" className="form-control" placeholder="Nombre del Puesto" required value={this.state.newJob.position} onChange={(e) => this.handleNewJobName(e)}></input>
          <label>Description:</label>
          <input type="text" name="description" className="form-control" placeholder="Descripción" required onChange={(e) => this.handleNewJobDescription(e)}></input>
          <label>Company:</label>
          <select className="form-control" onChange={(e) => this.handleNewJobCompany(e)}>
            {
              this.state.organizations.map((empresa, index)=>{
                if(empresa.placeId==this.state.newJob.ciudad){
                  return <option key={index} value={empresa.id}>{empresa.name}</option>
                }
              })
            }
          </select>
          <label>City:</label>
          <select className="form-control" onChange={(e) => this.handleNewJobCity(e)}>
            {
              this.state.citiesfromAPI.map((ciudad, index)=>{
                if(ciudad.countrieId==this.state.newJob.pais){
                  return <option key={index} value={ciudad.id}>{ciudad.name}</option>
                }
              })
            }
          </select>
          <label>Country:</label>
          <select className="form-control" onChange={(e) => this.handleNewJobCountry(e)}>
            {
              this.state.countriesfromAPI.map((pais, id)=>{
                return <option key={id} value={pais.id}>{pais.name}</option>
              })
            }
          </select>
          <button type="submit" className="btn btn-primary btn-success">Agregar</button>
        </form>
    );
  }
}