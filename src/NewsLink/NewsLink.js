import { NavLink, Switch, Route } from 'react-router-dom';
import Political from "../Political/Political"
import Auto from "../Auto/Auto"
import Musical from "../Musical/Musical"
import Medical from "../Medical/Medical"
import Scientific from "../Scientific/Scientific"
import Economic from "../Economic/Economic"
import Mars from "../Mars/Mars"

import classes from "./NewsLink.module.css";

const NewsLink = () => {
    return ( 
        <div className={classes.NewsLink}>
            <NavLink activeClassName="active" to="/political">Political</NavLink>
            <NavLink activeClassName="active" to="/auto">Auto</NavLink>
            <NavLink activeClassName="active" to="/musical">Musical</NavLink>
            <NavLink activeClassName="active" to="/medical">Medical</NavLink>
            <NavLink activeClassName="active" to="/scientific">Scientific</NavLink>
            <NavLink activeClassName="active" to="/economic">Economic</NavLink>
            <NavLink activeClassName="active" to="/mars">Mars</NavLink>

            <Switch>
            
                <Route path="/political" component={Political} exact/>
                <Route path="/auto" component={Auto} exact/>
                <Route path="/musical" component={Musical} exact/>
                <Route path="/medical" component={Medical} exact/>
                <Route path="/scientific" component={Scientific} exact/>
                <Route path="/economic" component={Economic} exact/>
                <Route path="/mars" component={Mars} exact/>
            </Switch>
        </div>
     );
}
 
export default NewsLink;