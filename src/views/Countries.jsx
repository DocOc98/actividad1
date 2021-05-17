import React from 'react';

export class Countries extends React.Component {
  constructor(){
    super()
    this.state = {
        pais: '',
        paises: [],
      };
}
  handlePais = (e) => {
    this.setState({
      pais: e.target.value
    })
  }
  handleNewCountry = (evt) => {
    evt.preventDefault();
    if( this.state.pais.trim() === ''){
        return false;
    }
    this.props.addCountry(evt, this.state.pais)
  }

  render() {
    return <div>
      <h3>Paises</h3>
      <form onSubmit={this.handleNewCountry}>
        <input type="text" value={this.state.pais} onChange={(e) => this.handlePais(e)} placeholder="ingrese pais"></input><br></br>
        <button type="submit" className="btn btn-primary m-2">CARGAR</button><hr></hr>
      </form>
      <ul>
        {
          this.props.paises.map(pais => {
            return  <li className="list-group-item mb-3" key={pais}>
              <h5>{pais}</h5>
              <button onClick={() => this.props.delete(pais)} className="btn btn-danger">Eliminar</button>
            </li>
          })
        }
      </ul>
    </div>;
  }

}
