import React from 'react';

export class Form extends React.Component {
  constructor() {
    super();
    this.state = {
        newJob: {
            puesto: '',
            empresa: 0,
            ciudad: 0,
            pais: 0
        }
    };
  }

  handleNewJobName = (evt) => {
    this.setState(prevState => ({
        newJob: {
          ...prevState.newJob,
          puesto: evt.target.value
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
    if( this.state.newJob.puesto.trim() === '' 
    ){
        return false;
    }
    this.props.onNewJobSubmit(evt, this.state.newJob)
  }

  render() {
    return (
        <form onSubmit={this.handleNewJobSubmit}>
          <label>Name:</label>
          <input type="text" name="puesto" className="form-control" placeholder="Nombre del Puesto" required value={this.state.newJob.puesto} onChange={(e) => this.handleNewJobName(e)}></input>
          <label>Company:</label>
          <select className="form-control" onChange={(e) => this.handleNewJobCompany(e)}>
            {
              this.props.empresas.map((empresa, index)=>{
                if(empresa.ciudad==this.state.newJob.ciudad){
                  return <option key={index} value={index}>{empresa.nombre}</option>
                }
              })
            }
          </select>
          <label>City:</label>
          <select className="form-control" onChange={(e) => this.handleNewJobCity(e)}>
            {
              this.props.ciudades.map((ciudad, index)=>{
                if(ciudad.pais==this.state.newJob.pais){
                  return <option key={index} value={index}>{ciudad.nombre}</option>
                }
              })
            }
          </select>
          <label>Country:</label>
          <select className="form-control" onChange={(e) => this.handleNewJobCountry(e)}>
            {
              this.props.paises.map(pais=>{
                return <option key={pais}>{pais}</option>
              })
            }
          </select>
          <button type="submit" className="btn btn-primary btn-success">Agregar</button>
        </form>
    );
  }

  componentDidMount() {}
}