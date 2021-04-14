import './App.css';
import Home from "./Home/Home"
import About from "./About/About"
import Contacts from "./Contacts/Contacts"

function App() {
  return (
    <div className="App">
      <a href= "/">Home</a>
      <a href= "/about">About</a>
      <a href= "/contacts">Contacts</a>
      <Home/>
      <About/>
      <Contacts/>
      
    </div>
  );
}

export default App;
