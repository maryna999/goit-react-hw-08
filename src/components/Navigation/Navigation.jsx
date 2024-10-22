import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import s from "./Navigation.module.css";

const Navigation = () => {
  const loggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <nav className={s.nav}>
        <NavLink className={s.home} to="/">
          Home
        </NavLink>
        {loggedIn && (
          <NavLink className={s.home} to="/contacts">
            Contacts
          </NavLink>
        )}
      </nav>
    </div>
  );
};
export default Navigation;
