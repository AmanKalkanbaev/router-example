import Logo from "../Media/Logo.png";
import { Link } from 'react-router-dom';

import classes from "./Nav.module.css";

const Nav = () => {
    return ( 
        <div className={classes.Nav}>
            <div className={classes.logo}>
                <img src={Logo}/>
                Abizyana <span>News</span>
            </div>
            <div className={classes.links}>
            <Link to="/">Home</Link>
            <Link to="/political">Political</Link>
            <Link to="/about">About</Link>
            <Link to="/contacts">Contacts</Link>
            </div>
        </div>
     );
}
 
export default Nav;