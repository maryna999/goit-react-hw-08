import { Link } from "react-router-dom";
import s from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div className={s.nav}>
      <Link className={s.link} to="/register">
        Register
      </Link>
      <Link className={s.link} to="/login">
        Login
      </Link>
    </div>
  );
}
