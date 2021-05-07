import { useState } from "react";

import { nanoid } from "nanoid";
import List from "../components/List";
import Form from "../components/Form";

export const ToDoList = () => {
  const [todo, setTodo] = useState({
    puesto: "",
    empresa: "",
    ciudad: "",
    pais: "",
  });
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(false);

  const { puesto, empresa, ciudad, pais } = todo;

  const updateState = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      puesto.trim() === "" ||
      empresa.trim() === "" ||
      ciudad.trim() === "" ||
      pais.trim() === ""
    ) {
      setError(true);
      return;
    }
    setError(false);
    setTodos([
      ...todos,
      {
        id: nanoid(),
        puesto,
        empresa,
        ciudad,
        pais,
      },
    ]);
    setTodo({
      puesto: "",
      empresa: "",
      ciudad: "",
      pais: "",
    });
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="row">
      <div className="container">
        <div className="mt-5">
          <h1>Puestos de Trabajo</h1>
          <div className="col-6">
            {error && (
              <div className="alert alert-danger text-center" role="alert">
                Complete todos los campos
              </div>
            )}
            <Form
              handleSubmit={handleSubmit}
              updateState={updateState}
              puesto={puesto}
              empresa={empresa}
              ciudad={ciudad}
              pais={pais}
            />
          </div>
          <div className="col-6">
            { todos.map((td) => ( 
              <List td={td} handleDelete={handleDelete} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};