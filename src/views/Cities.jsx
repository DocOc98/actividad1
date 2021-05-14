import React from 'react';

export class Cities extends React.Component {
  render() {
    return <div>
      <h3>Ciudades</h3>
      <ul>
        {
          this.props.ciudades.map(ciudad => {
            return <li className="list-group-item mb-3" key={ciudad}>
            <h5>
              {ciudad.nombre}
            </h5>
            <h6>
              {
                (()=>{
                  return this.props.paises[ciudad.pais];
                })()
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

