import React from 'react';
import {List} from '../components/List'; 
import {Form} from '../components/Form';

export class ToDoList extends React.Component {
  constructor() {
    super();
    this.state = {
      jobs: [
        {puesto: 'Frontend JS', empresa: 'ABC', ciudad: 'La Rioja', pais: 'Argentina'},
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
              <Form onNewJobSubmit={this.onNewJob}></Form>
            </div>
            <div className="col-6">
                <ul>
                  {this.state.jobs.map((job, id) => { 
                    return <List key={id} elem={job} onDelete={() => this.deleteJob(id)}></List> 
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