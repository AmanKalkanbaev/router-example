import Logo from "../Media/Logo.png";
import { NavLink } from 'react-router-dom';

import classes from "./Nav.module.css";

const Nav = () => {
    return ( 
        <div className={classes.Nav}>
            <div className={classes.logo}>
                <img alt={"Monkey"} src={Logo}/>
                Abizyana <span>News</span>
            </div>
            <div className={classes.links}>
                <NavLink activeClassName="active" to="/" exact>Home</NavLink>
                <NavLink activeClassName="active" to="/political">Political</NavLink>
                <NavLink activeClassName="active" to="/auto">Auto</NavLink>
                <NavLink activeClassName="active" to="/musical">Musical</NavLink>
                <NavLink activeClassName="active" to="/about">About</NavLink>
                <NavLink activeClassName="active" to="/contacts">Contacts</NavLink>
            </div>
        </div>
     );
}
 
export default Nav;