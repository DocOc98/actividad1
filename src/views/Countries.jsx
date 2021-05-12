import React from 'react';

export class Countries extends React.Component {
  render() {
    return <div>
      <h3>Paises</h3>
      <ul>
        {
          this.props.paises.map(pais => {
            return <li key={pais}>
              {pais}
              <button onClick={() => this.props.delete(pais)}>Eliminar</button>
            </li>
          })
        }
      </ul>
    </div>;
  }

}
