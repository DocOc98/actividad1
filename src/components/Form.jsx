import React from 'react';

export class Form extends React.Component {
  constructor() {
    super();
    this.state = {
        newJob: {
            puesto: '',
            empresa: '',
            ciudad: '',
            pais: 'Argentina'
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
    if( this.state.newJob.puesto.trim() === '' ||
        this.state.newJob.empresa.trim() === '' ||
        this.state.newJob.ciudad.trim() === '' ||
        this.state.newJob.pais.trim() === ''
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
          <input type="text" name="empresa" className="form-control" placeholder="Ingresa empresa" required value={this.state.newJob.empresa} onChange={(e) => this.handleNewJobCompany(e)}></input>
          <label>City:</label>
          <input type="text" name="ciudad" className="form-control" placeholder="Ingresa ciudad" required value={this.state.newJob.ciudad} onChange={(e) => this.handleNewJobCity(e)}></input>
          <label>Country:</label>
          <input type="text" name="pais" className="form-control" placeholder="Ingresa pais" required value={this.state.newJob.pais} onChange={(e) => this.handleNewJobCountry(e)}></input>
          <button type="submit" className="btn btn-primary btn-success">Agregar</button>
        </form>
    );
  }

  componentDidMount() {}
}