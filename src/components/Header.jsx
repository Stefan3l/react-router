import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home Page</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">Chi Siamo</NavLink>
          </li>
          <li>
            <NavLink to="/contatti">Contatti</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
