import { Link } from "react-router-dom";
import logo from "../assets/images/logo_new.png";
import classes from "../styles/Nav.module.css";
import Account from "./Account";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/" className={classes.brand}>
            <img src={logo} alt="Quiz?" />
            <h3>Learn The React</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
