import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './components/header/header';
import Home from './components/home/home';
import Services from './components/services/services';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Notfound from './components/notfound/notfound';
import Footer from './components/footer/footer';
import Registration from './components/registration/registration';
import Login from './components/login/login';
import AuthProvider from './context/AuthProvider';
import PrivetRoute from './components/PrivetRoute/privetRoute';
import Dispatch from './components/dispatch/dispatch';

function App() {

  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/registration">
              <Registration></Registration>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivetRoute path="/dispatch/:key">
              <Dispatch></Dispatch>
            </PrivetRoute>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );

}

export default App;