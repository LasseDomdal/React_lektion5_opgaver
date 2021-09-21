import './App.css';
import Footer from './components/footer/Footer.js'
import Header from "./components/Header/Header";
import {Route, Switch} from "react-router-dom";
import Login from './middle/Login.js'
import Signup from './middle/Signup.js';
import FrontPage from './middle/FrontPage.js';
import About from './middle/About.js';

function App() {
  return (
    <div className="App">
      <Header/>

        <div className="routes">
            <Switch>
                <Route exact path="/" ><FrontPage/></Route>
                <Route path="/login" ><Login/></Route>
                <Route path="/signup" ><Signup/></Route>
                <Route path="/about" ><About/></Route>


            </Switch>
        </div>


      <Footer> </Footer>


    </div>


  );
}

export default App;
