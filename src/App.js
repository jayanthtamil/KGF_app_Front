import React,{useState,useEffect} from "react";
import './App.css';
import Header from './Components/Navbar';
import Dropdown from './Components/Dropdown';
import DB from './Components/DB';
import Admin from './Components/Admin';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Reports from "./Components/Reports";
import Cash from "./Components/Cash";
import Bill from "./Components/Bill";
import Bank from "./Components/Billdropdown/Bank";
import Loan from "./Components/Billdropdown/Loan";
import Collection from "./Components/Billdropdown/Collection";
import Customer from "./Components/Billdropdown/Customer";
import Sales from "./Components/Billdropdown/Sales";


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log("i resized");
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <>
    <Router>
      <div>
      <Header toggle={toggle} />
       <Dropdown isOpen={isOpen} toggle={toggle} /> 
      

       <Switch>
        <Route  exact path="/" component={DB} />
        <Route path="/admin" component={Admin} />
        <Route path="/cash" component={Cash} />
        <Route path="/bill" component={Bill} />
        <Route path="/reports" component={Reports} />
        <Route path="/bank" component={Bank} />
        <Route path="/customer" component={Customer} />
        <Route path="/loan" component={Loan} />
        <Route path="/collection" component={Collection} />
        <Route path="/sales" component={Sales} />
      </Switch>

       

      </div>
      </Router>
    </>

  );
}

export default App;
