import { NavLink, Switch, Route } from 'react-router-dom';
import Political from "./Political/Political"
import Auto from "./Auto/Auto"
import Musical from "./Musical/Musical"
import Medical from "./Medical/Medical"
import Scientific from "./Scientific/Scientific"
import Economic from "./Economic/Economic"
import Mars from "./Mars/Mars"

import classes from "./NewsLink.module.css";

const NewsLink = () => {
    return ( 
        <div className={classes.NewsLink}>
            <NavLink activeClassName="active" to="/newsLink/political">Political</NavLink>
            <NavLink activeClassName="active" to="/newsLink/auto">Auto</NavLink>
            <NavLink activeClassName="active" to="/newsLink/musical">Musical</NavLink>
            <NavLink activeClassName="active" to="/newsLink/medical">Medical</NavLink>
            <NavLink activeClassName="active" to="/newsLink/scientific">Scientific</NavLink>
            <NavLink activeClassName="active" to="/newsLink/economic">Economic</NavLink>
            <NavLink activeClassName="active" to="/newsLink/mars">Mars</NavLink>

            <Switch>
                <Route path="/newsLink/political" component={Political} exact/>
                <Route path="/newsLink/auto" component={Auto} exact/>
                <Route path="/newsLink/musical" component={Musical} exact/>
                <Route path="/newsLink/medical" component={Medical} exact/>
                <Route path="/newsLink/scientific" component={Scientific} exact/>
                <Route path="/newsLink/economic" component={Economic} exact/>
                <Route path="/newsLink/mars" component={Mars} exact/>
            </Switch>
        </div>
     );
}
 
export default NewsLink;