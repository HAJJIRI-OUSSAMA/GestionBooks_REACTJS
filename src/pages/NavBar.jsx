import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>Accueil</Link>
        </li>
        <li>
          <Link to={"/books"}>Books</Link>
        </li>
        <li>
          <Link to={"/orders"}>Orders</Link>
        </li>
        <li>
          <Link to={"/costumer"}>Costumers</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
