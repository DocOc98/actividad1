import React from 'react';
import { getPlaces, getCountries } from '../clients/todoClient';

export class List extends React.Component {
  constructor() {
    super();
    this.state = {
      countriesfromAPI: [],
      citiesfromAPI: [],
      withError: false
  };
  }

  componentDidMount() {
    getCountries().then(res => this.setState({
      countriesfromAPI: res
    }))
    getPlaces().then(res2 => this.setState({
      citiesfromAPI: res2
    }))
  }

  render() {
    return (
        <li className="list-group-item mb-3" key={this.id}>
          <h4>
            {this.props.elem.position}
          </h4>
          <h6>
            {
              this.props.empresas.map((compania, index)=>{
                if(compania.id==this.props.elem.organizationId){
                  return <label>{compania.name} <br></br>
                  {
                    this.state.citiesfromAPI.map((ciudad, index2)=>{
                      if(ciudad.id==compania.placeId){
                        return <label>{ciudad.name} - 
                          {
                            this.state.countriesfromAPI.map((pais, index3)=>{
                              if(pais.id==ciudad.countrieId){
                                return <label>{pais.name}</label>
                              }
                            })
                          }
                        </label> 
                      }
                    })
                  }
                  </label>
                }
              })
            }
          </h6>
          <p>
            {this.props.elem.description}
          </p>
          <button onClick={() => this.props.onDelete(this.id)} className="btn btn-danger">Eliminar</button>
        </li>
    );
  }
}
