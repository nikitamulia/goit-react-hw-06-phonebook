
import styles from './ContactForm.module.css';
import { useDispatch, useSelector } from "react-redux";
import { addPhone,getPhones } from "redux/phoneSlice";

export default function ContactForm(){
  
  const dispatch = useDispatch();
  const phones = useSelector(getPhones);

  const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.elements.name.value;
        const number = form.elements.number.value;
        if(phones.some(phone => phone.name.toLowerCase() === name.toLowerCase())){
          return alert(`${name} is already in contacts `)
        }
        dispatch(addPhone(name, number));
        form.reset();
  };
  return (
          <div className={styles.contactForm}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <p>Name</p>
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
              <p>Number</p>
              <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
              <div>
                <button className={styles.button} type="submit">Add contact</button>
              </div>
            </form>
          </div>
        )
}
