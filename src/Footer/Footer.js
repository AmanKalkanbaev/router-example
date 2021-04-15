import Logo from "../Media/Logo.png";
import { Link } from 'react-router-dom';

import classes from "./Footer.module.css";

const Footer = () => {
    return ( 
        <div className={classes.Footer}>

            <div  className={classes.FooterContent}>
                <div className={classes.links}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contacts">Contacts</Link>
                </div>

                <img src={Logo}/>
            </div>
            <p>
                © 2021 AKA «Abizyana News».
                All rights reserved. License №013 Sueta KR.
            </p>

        </div>
     );
}
 
export default Footer;