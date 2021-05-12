import React from 'react';

export class Cities extends React.Component {
  render() {
    return <div>
      <h4>Cities</h4>
      <p>{ JSON.stringify(this.props.ciudades) }</p>
      <p>{ JSON.stringify(this.props.paises) }</p>
    </div>
  }
}

