import React from 'react';

export class Countries extends React.Component {
  render() {
    return <div>
      <h3>Paises</h3>
      <ul>
        {
          this.props.paises.map(pais => {
            return <li className="list-group-item mb-3" key={pais}>
            <h5>
              {pais}
            </h5>
            <button onClick={() => this.props.delete(pais)} className="btn btn-danger">Eliminar</button>
          </li>
          })
        }
      </ul>
    </div>;
  }

}
