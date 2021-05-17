import React from 'react';

export class Companies extends React.Component {
  constructor() {
    super();
    this.state = {
        newCompany: {
            nombre: '',
            ciudad: ''
        }
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
  handleNewCompany = (evt) => {
    evt.preventDefault();
    if( this.state.newCompany.nombre.trim() === '' || this.state.newCompany.ciudad.trim() === ''){
        return false;
    }
    this.props.addCompany(evt, this.state.newCompany)
  }
  render() {
    return <div>
      <h3>Compañias</h3>
      <form onSubmit={this.handleNewCompany}>
        <input type="text" value={this.state.newCompany.nombre} onChange={(e) => this.handleCompania(e)} placeholder="ingrese compania"></input><br></br>
        <input type="text" value={this.state.newCompany.ciudad} onChange={(e) => this.handleCiudad(e)} placeholder="ingrese ciudad"></input><br></br>
        <button type="submit" className="btn btn-primary m-2">CARGAR</button><hr></hr>
      </form>
      <ul>
        {
          this.props.empresas.map(empresa => {
            return <li className="list-group-item mb-3" key={empresa}>
            <h5>
              {empresa.nombre}
            </h5>
            <h6>
              { empresa.ciudad }
            </h6>
            <button onClick={() => this.props.delete(empresa)} className="btn btn-danger">Eliminar</button>
          </li>
          })
        }
      </ul>
    </div>
  }

}

