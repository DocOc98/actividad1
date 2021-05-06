const List = ({ td, handleDelete }) => {
    return (
      <ul class="list-group" key={td.id}>
        <li className="list-group-item mb-3">
          <h4>
            {td.puesto}
          </h4>
          <h6>
            {td.empresa}
          </h6>
          <p>
            {td.ciudad}, {td.pais}
          </p>
          <button onClick={() => handleDelete(td.id)} className="btn btn-danger float-right">Eliminar</button>
        </li>
      </ul>
    );
  };
  
  export default List;