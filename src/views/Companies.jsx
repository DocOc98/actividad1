import React from 'react';

export class Companies extends React.Component {
  render() {
    return <div>
      <h3>Compañias</h3>
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

