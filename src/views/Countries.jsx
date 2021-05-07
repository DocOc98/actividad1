import React from 'react';

export class Countries extends React.Component {
  render() {
    return <div className="row">
        <div className="container">
            <div className="mt-5">
                <h1>Paises</h1>
                <ul>
                    {
                        this.props.pais.map(pais =>{
                            return <li key={pais}>{pais}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    </div>;
  }

}
