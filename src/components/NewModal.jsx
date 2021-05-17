import React from 'react';

export class NewModal extends React.Component {
  constructor(props){    
      super(props)
      this.props = props
      this.handleChange = this.handleChange.bind(this);
      this.insertarPuesto = this.insertarPuesto.bind(this);
      this.state={
          puesto: "",
          empresa: "",
          ciudad: "",
          pais: "", 
        paises: [],
        ciudades: [], 
        companias: []
      }
      
  };

  componentDidMount() {
		if(localStorage.getItem("paises") != null){
			this.setState({
				paises: JSON.parse(localStorage.getItem("paises"))
			})
		}
    if(localStorage.getItem("ciudades") != null){
			this.setState({
				ciudades: JSON.parse(localStorage.getItem("ciudades"))
			})
		}
    if(localStorage.getItem("companias") != null){
			this.setState({
				companias: JSON.parse(localStorage.getItem("companias"))
			})
		}
	}

  handleChange (e){
    this.setState({
      ...this.state,
      [e.target.name] : e.target.value
    })
  }

  handleSelectCountry = (e) => {
		e.preventDefault();
		this.setState({
			pais: JSON.parse(e.target.value),
		});  
  }

  handleSelectCity = (e) => {
		e.preventDefault();
		this.setState({
			ciudad: JSON.parse(e.target.value)
      
		});  
  }
  handleSelectCompanie = (e) => {
		e.preventDefault();
		this.setState({
			compania: JSON.parse(e.target.value)
      
		});  
  }

  insertarPuesto(){
    this.props.insertarPuesto(this.state);
  }
  
  render(){
    return(
        <>
      <h1>Insertar Puesto</h1><br></br>
              <label> Puesto: </label>
              <input className="form-control" 
              name="puesto" 
              type="text"
              placeholder="Ingrese puesto"
               onChange={this.handleChange}/><br></br>
              <label> Compania:  </label>
              <select class="custom-select" 
                      id="inputGroupSelect01"
                      name="compania"
						          onChange={(e) => this.handleSelectCompanie(e)}
						          value={JSON.stringify(this.state.compania)}>
						<option value={JSON.stringify({})}>Elija Compania</option>
                        { this.state.companias.map((compania, index) => (
                            <option key={index+1} value={JSON.stringify(compania)}>{compania}</option>
                        ))}
        			</select><br></br><br></br>
              <label> Pais:  </label>
              <select class="custom-select" 
                      id="inputGroupSelect01"
                      name="pais"
						          onChange={(e) => this.handleSelectCountry(e)}
						          value={JSON.stringify(this.state.pais)}>
						<option value={JSON.stringify({})}>Elija Pais</option>
                        { this.state.paises.map((pais, index) => (
                            <option key={index+1} value={JSON.stringify(pais)}>{pais}</option>
                        ))}
        			</select><br></br><br></br>
              <label>
                Ciudad: 
              </label>
              <select class="custom-select" 
                      id="inputGroupSelect01"
                      name="ciudad"
						          onChange={(e) => this.handleSelectCity(e)}
						          value={JSON.stringify(this.state.ciudad)} >
					    	<option value={JSON.stringify({})}>Elija Ciudad</option>
                  { this.state.ciudades.map((ciudad, index) => (
                  <option key={index+1} value={JSON.stringify(ciudad)}>{ciudad}</option>
                        ))}
					</select><br></br><hr></hr>
            <button className="btn btn-primary" onClick={this.insertarPuesto}>
              Insertar
            </button>
            <button className="btn btn-danger" onClick={this.props.cerrarModal}>
              Cancelar
            </button><br></br><br></br>
        </>
    )
  }
}  