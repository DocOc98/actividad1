import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { ToDoList } from './views/ToDoList';
import { Companies } from './views/Companies';
import { Cities } from './views/Cities';
import { Countries } from './views/Countries';
import { NavBar } from './views/NavBar';
import { NotFound} from './views/NotFound';

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Route path="/" exact component={ToDoList}></Route>
        <Route path="/companies" exact component={Companies}></Route>
        <Route path="/cities" exact component={Cities}></Route>
        <Route path="/countries" exact component={Countries}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </Router>
  );
}

export default App;
