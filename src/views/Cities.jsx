import React from 'react';

export class Cities extends React.Component {
  constructor() {
    super();
    this.state = {
        newCity: {
            nombre: '',
            pais: ''
        }
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
    if( this.state.newCity.nombre.trim() === '' || this.state.newCity.pais.trim() === ''){
        return false;
    }
    this.props.addCity(evt, this.state.newCity)
  }

  render() {
    return <div>
      <h3>Ciudades</h3>
      <form onSubmit={this.handleNewCity}>
        <input type="text" value={this.state.newCity.nombre} onChange={(e) => this.handleCiudad(e)} placeholder="ingrese ciudad"></input><br></br>
        <input type="text" value={this.state.newCity.pais} onChange={(e) => this.handlePais(e)} placeholder="ingrese pais"></input><br></br>
        <button type="submit" className="btn btn-primary m-2">CARGAR</button><hr></hr>
      </form>
      <ul>
        {
          this.props.ciudades.map(ciudad => {
            return <li className="list-group-item mb-3" key={ciudad}>
            <h5>
              {ciudad.nombre}
            </h5>
            <h6>
              {
                ciudad.pais
              }
            </h6>
            <button onClick={() => this.props.delete(ciudad)} className="btn btn-danger">Eliminar</button>
          </li>
          })
        }
      </ul>
    </div>
  }
}

