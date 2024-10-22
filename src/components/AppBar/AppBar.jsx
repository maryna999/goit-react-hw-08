import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import s from "./AppBar.module.css";

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header>
      <div className={s.header}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
}
