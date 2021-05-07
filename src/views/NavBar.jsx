import React from 'react';
import {Link} from 'react-router-dom';

export class NavBar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul class="navbar-nav">
            <li class="nav-item">
            <a class="nav-link" href="#"><Link to="/">Trabajos</Link></a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#"><Link to="/companies">Empresas</Link></a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#"><Link to="/cities">Ciudades</Link></a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#"><Link to="/countries">Paises</Link></a>
            </li>
        </ul>
    </nav>
  }

}
