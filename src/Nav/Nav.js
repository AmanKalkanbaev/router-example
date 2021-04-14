
import { Link } from 'react-router-dom';

import classes from "./Nav.module.css";

const Nav = () => {
    return ( 
        <div className={classes.Nav}>
            <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contacts">Contacts</Link>
            </div>
        </div>
     );
}
 
export default Nav;