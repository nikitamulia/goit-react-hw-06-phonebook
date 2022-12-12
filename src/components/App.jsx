import { getPhones } from "redux/phoneSlice";
import { useSelector } from 'react-redux';
import ContactForm from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";



export default function App(){
  const contacts = useSelector(getPhones);
 

    return (
      <div
        className="App"
      >
       <div>
        <h1>Phonebook</h1>
        <ContactForm />
       
       </div>
        {contacts.length>0 ? <h2>Contacts</h2> : <h2>There are no contacts</h2>}
        {contacts.length>0 &&  <Filter />}
        <ContactList />
      </div>
    );
  
  }