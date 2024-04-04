import { nanoid } from 'nanoid'
import css from './Contact.module.css'

const Contact = ({ contacts, onDeleteUser }) => {
    // console.log(contacts);
    return (
        
        <>
        {contacts.map(contact => (
            <li className={css.item} key={nanoid()} >
                <div>
                    <p>{contact.name}</p>
                    <p>{contact.number}</p>
                </div>
                <button id={contact.id}  className={css.button} onClick={onDeleteUser} type="button" >
                    Delete
                </button>
            </li>
        ))}
        </>
    )
}
export default Contact