import React from 'react';
import {List} from '../components/List'; 
import {Form} from '../components/Form';
import { getData, postData, deleteData, getOrganizations } from '../clients/todoClient'

export class ToDoList extends React.Component {
  constructor() {
    super();
    this.state = {
      jobs: [
        {puesto: 'Frontend JS', empresa: 0, ciudad: 0, pais: 0},
      ], 
      jobsfromAPI: [],
      organizations: [],
      withError: false
    };
  }

  onNewJob = (evt, newJob) => {
    /*this.setState({
      //jobs: [...this.state.jobs, newJob]
      jobsfromAPI: [...this.state.jobsfromAPI, newJob]
    });*/
    postData(newJob.empresa);
  }

  deleteJob = (id_del) => {
    /*this.setState({
      //jobs: this.state.jobs.filter((job, id) => id !== id_del)
      jobsfromAPI: this.state.jobsfromAPI.filter((job, id) => id !== id_del)
    });*/
    deleteData(id_del)
  }

  updateStateFromAPI = (datos) => {
    this.setState({
      jobsfromAPI: datos
    })
  }

  componentDidMount() {
    /*axios.get('https://api-fake-pilar-tecno.herokuapp.com/jobs/1')
                           .then(res => this.setState({
                             jobsfromAPI: res.data
                           }))
                           .catch(err => this.setState({
                             withError: true
                           }))
    axios.post('https://api-fake-pilar-tecno.herokuapp.com/jobs/', 
        {
          tittle: 'foo',
          body: 'bar', 
          userID: 1
        })
        .then(res => console.log(res))*/
    //getData().then(res => console.log(res))
    //getData(this.updateStateFromAPI)
    getData().then(res => this.setState({
      jobsfromAPI: res
    }))
    getOrganizations().then(res2 => this.setState({
      organizations: res2
    }))
   }

  render() {
    return (
      <div className="row">
        <div className="container">
          <div className="mt-5">
          { this.state.withError && <p>Error al conectarse con la API</p> }
            <h1>Puestos de Trabajo</h1>
            <div className="col-6">
              <Form onNewJobSubmit={this.onNewJob}></Form>
            </div>
            <div className="col-6">
                <ul>
                  {this.state.jobsfromAPI.map((job, id) => { 
                    //return <List key={id} elem={job} onDelete={() => this.deleteJob(id)} paises={this.props.paises} empresas={this.props.empresas} ciudades={this.props.ciudades}></List> 
                    /*return <li className="list-group-item mb-3" key={id}>
                      {job.position}
                    </li>*/
                    return <List key={id} elem={job} onDelete={() => this.deleteJob(job)} empresas={this.state.organizations}></List> 
                  })}
                </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

}