import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import s from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={s.container}>
      <div>
        <b className={s.user}>{user.email}</b>
      </div>
      <button className={s.btn} onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}
