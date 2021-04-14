import Home from "./Home/Home";
import About from "./About/About";
import Contacts from "./Contacts/Contacts"
import { Route } from 'react-router';
import Nav from "./Nav/Nav";

import './App.css';

function App() {
  return (
    <div className="App">

      
      <Nav/>
      <Route path="/" component={Home} exact/>
      <Route path="/about" component={About}/>
      <Route path="/contacts" component={Contacts}/>
      
    </div>
  );
}

export default App;
