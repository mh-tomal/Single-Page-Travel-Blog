import logo from "../asserts/images/logo.png";
import classes from "../styles/Nav.module.css";
import Account from "./Account";
export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="index.html" className={classes.band}>
            <img href={logo} alt="Quiz?" />
            <h3>Quiz?</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
