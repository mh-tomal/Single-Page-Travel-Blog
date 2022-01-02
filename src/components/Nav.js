import logo from "../assets/images/logo_new.png";
import classes from "../styles/Nav.module.css";
import Account from "./Account";
export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="index.html" className={classes.brand}>
            <img src={logo} alt="Quiz?" />
            <h3>Learn The React</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
