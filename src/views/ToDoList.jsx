import React from 'react';
import {List} from '../components/List'; 
import {Form} from '../components/Form';

export class ToDoList extends React.Component {
  constructor() {
    super();
    this.state = {
      jobs: [
        {puesto: 'Frontend JS', empresa: 0, ciudad: 0, pais: 0},
      ]
    };
  }

  onNewJob = (evt, newJob) => {
    this.setState({
      jobs: [...this.state.jobs, newJob]
    });
  }

  deleteJob = (id_del) => {
    this.setState({
      jobs: this.state.jobs.filter((job, id) => id !== id_del)
    });
  }

  render() {
    return (
      <div className="row">
        <div className="container">
          <div className="mt-5">
            <h1>Puestos de Trabajo</h1>
            <div className="col-6">
              <Form onNewJobSubmit={this.onNewJob} paises={this.props.paises} empresas={this.props.empresas} ciudades={this.props.ciudades}></Form>
            </div>
            <div className="col-6">
                <ul>
                  {this.state.jobs.map((job, id) => { 
                    return <List key={id} elem={job} onDelete={() => this.deleteJob(id)} paises={this.props.paises} empresas={this.props.empresas} ciudades={this.props.ciudades}></List> 
                  })}
                </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
  }
}