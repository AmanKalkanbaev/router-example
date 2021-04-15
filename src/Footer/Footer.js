import Logo from "../Media/Logo.png";
import { NavLink } from 'react-router-dom';

import classes from "./Footer.module.css";


const Footer = () => {
    return ( 
        <div className={classes.Footer}>

            <div  className={classes.FooterContent}>
                <div className={classes.links}>
                    <NavLink activeClassName="active" to="/">Home</NavLink>
                    <NavLink activeClassName="active" to="/political">Political</NavLink>
                    <NavLink activeClassName="active" to="/about">About</NavLink>
                    <NavLink activeClassName="active" to="/contacts">Contacts</NavLink>
                </div>

                <img alt={"Monkey"}  src={Logo}/>
            </div>
            <p>
                © 2021 AKA «Abizyana News».
                All rights reserved. License №013 Sueta KR.
            </p>

        </div>
     );
}
 
export default Footer;