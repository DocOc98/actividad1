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
            {this.props.elem.empresa}
          </h6>
          <p>
            {this.props.elem.ciudad}, {this.props.elem.pais}
          </p>
          <button onClick={() => this.props.onDelete(this.id)} className="btn btn-danger">Eliminar</button>
        </li>
    );
  }

  componentDidMount() {
  }
}
