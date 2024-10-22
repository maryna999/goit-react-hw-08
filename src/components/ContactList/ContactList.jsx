import { useSelector } from "react-redux";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import { selectFilteredContacts } from "../../redux/filters/selectors";
import { ThreeDots } from "react-loader-spinner";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

export default function ContactList() {
  const filteredUsers = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  return (
    <div>
      <ul className={s.list}>
        {loading ? (
          <div>
            <ThreeDots
              visible={true}
              height="80"
              width="80"
              color="#4fa94d"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        ) : error ? (
          <p className={s.text}>Something went wrong, check your Internet connection</p>
        ) : (
          filteredUsers.map((user) => {
            return <Contact userData={user} key={user.id} />;
          })
        )}
      </ul>
    </div>
  );
}
