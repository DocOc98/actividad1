import React from 'react';

export class List extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
        <li className="list-group-item mb-3" key={this.id}>
          <h4>
            {this.props.elem.puesto}
          </h4>
          <h6>
            {
              this.props.empresas.map((compania, index)=>{
                if(index==this.props.elem.empresa){
                  return <p>{compania.nombre}</p>
                }
              })
            }
          </h6>
            {
              this.props.ciudades.map((ciudad, index)=>{
                if(index==this.props.elem.ciudad){
                  return <p>{ciudad.nombre}, 
                    {
                      (()=>{
                        return this.props.paises[ciudad.pais];
                      })()
                    }
                  </p>
                }
              })
            }
          <button onClick={() => this.props.onDelete(this.id)} className="btn btn-danger">Eliminar</button>
        </li>
    );
  }

  componentDidMount() {
  }
}
