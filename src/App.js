import Home from "./Home/Home";
import About from "./About/About";
import NewsLink from "./NewsLink/NewsLink";
import Contacts from "./Contacts/Contacts"
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
          <Route path="/newsLink" component={NewsLink} exact/>
          <Route path="/contacts" component={Contacts} exact/>
          <Route  path="/" render={() => <h1 className="four">Page not found</h1>}/>
        </Switch>
      </div>
      <Footer/>
      
    </div>
  );
}

export default App;
