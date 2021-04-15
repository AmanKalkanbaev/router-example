import Home from "./Home/Home";
import About from "./About/About";
import Contacts from "./Contacts/Contacts"
import Political from "./Political/Political"
import { Route } from 'react-router';
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";

import './App.css';

function App() {
  return (
    <div className="App">

      
      <Nav/>
      <div className="content">
        <Route path="/" component={Home} exact/>
        <Route path="/about" component={About}/>
        <Route path="/contacts" component={Contacts}/>
        <Route path="/political" component={Political}/>
      </div>
      <Footer/>
      
    </div>
  );
}

export default App;
