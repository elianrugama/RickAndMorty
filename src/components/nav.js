import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <ul>
        <li className={window.location.pathname === "/" ? "active" : ""}>
          <Link to="/">HOME</Link>
        </li>

        <li>
          <Link
            className={
              window.location.pathname === "/personajes" ? "active" : ""
            }
            to="/personajes"
          >
            PERSONAJES
          </Link>
        </li>
        <li
          className={window.location.pathname === "/episodios" ? "active" : ""}
        >
          <Link to="/episodios">EPISODDIOS</Link>
        </li>
      </ul>
    </div>
  );
}
