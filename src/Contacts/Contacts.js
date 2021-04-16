
import classes from "./Contacts.module.css";

const Contacts = () => {
    return ( 
        <div className={classes.Contacts}>
            <div className={classes.header}>
                <h3>
                    For cooperation, or complaints and suggestions:
                </h3>
            </div>
            <div className={classes.block}>
                Business
                <ul>
                    <li>Call: + 996 773 678 608</li>
                    <li> Email: Kalkanbaev5@gmail.com</li>
                    <li>Email: abizyananews@gmail.com</li>
                    <li>WhatsApp/ Telegram:+ 996 553 678 608</li>
                </ul>
                Personal
                <ul>
                    <li>Call: + 996 707 678 608</li>
                    <li> Email: amankalkanbaev@yandex.ru</li>
                    <li>Telegram:+ 996 553 678 608</li>
                </ul>
            </div>

            
            
           
        </div>
    );
}
 
export default Contacts;