import logo from './logo.svg';
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

        <div>
            <Switch>
                <Route path="/" ><FrontPage/></Route>
                <Route path="/login" ><Login/></Route>
                <Route path="/signup" ><Signup/></Route>
                <Route path="/abort" ><About/></Route>

                {/*<Route path="/" render={() => <FrontPage />}></Route>*/}
                {/*<Route path="/" ><FrontPage/></Route>*/}

            </Switch>
        </div>


      <Footer> </Footer>


    </div>


  );
}

export default App;
