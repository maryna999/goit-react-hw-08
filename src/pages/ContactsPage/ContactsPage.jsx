import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { fetchContacts } from "../../redux/contacts/operations";
import s from "./ContactsPage.module.css";

export default function ContactsPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section className={s.contactPage}>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </section>
  );
}
