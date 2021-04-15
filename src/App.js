import Home from "./Home/Home";
import About from "./About/About";
import Contacts from "./Contacts/Contacts"
import Political from "./Political/Political"
import Auto from "./Auto/Auto"
import Musical from "./Musical/Musical"
import { Route, Switch } from 'react-router';
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";

import './App.css';

function App() {
  return (
    <div className="App">

      <Nav/>
      <div className="content">
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/about" component={About} exact/>
          <Route path="/contacts" component={Contacts} exact/>
          <Route path="/political" component={Political} exact/>
          <Route path="/auto" component={Auto} exact/>
          <Route path="/musical" component={Musical} exact/>
          <Route  path="/" render={() => <h1 className="four">Page not found</h1>}/>
        </Switch>
      </div>
      <Footer/>
      
    </div>
  );
}

export default App;
