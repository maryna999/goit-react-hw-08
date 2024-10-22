import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import s from "./HomePage.module.css";

export default function HomePage() {
  const isLogged = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <section className={s.home}>
      <div className="container">
        {isLogged ? (
          <div>
            <h1>
              Welcome <b>{user.name}</b>
            </h1>
          </div>
        ) : (
          <div>
            <h1 className={s.welcome}>
              Welcome to Phonebook! Register or Login to continue!
            </h1>
          </div>
        )}
      </div>
    </section>
  );
}
