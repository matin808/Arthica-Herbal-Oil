import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Info from './components/Info';
import Footer from './components/Footer';


function App() {
  return (

    <Router>
    <div className="App">
    <Switch>

    <Route path = "/gallery">
    <Header />
    <Info /> 
    <Footer />
    </Route>

    <Route path = "/about">
    <Header />
    <About /> 
    <Footer />
    </Route>


    <Route path = "/">
        <Header />
        <Home /> 
        <Footer />
    </Route>


    </Switch>
    </div>
   
    </Router>
  );
}

export default App;
