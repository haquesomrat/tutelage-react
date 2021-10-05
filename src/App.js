import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Tutors from './Components/Tutors/Tutors';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/tutors">
            <Tutors></Tutors>
          </Route>
          <Route path="/about  ">
            <About></About>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
