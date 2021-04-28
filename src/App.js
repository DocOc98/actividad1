import logo from './logo.svg';
import './App.css';
import { ToDoList } from './components/ToDoList';

function App() {
  return (
    <div className="container">
      <div className="mt-5">
        <h1>Puestos de Trabajo</h1>
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
