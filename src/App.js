import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Bookstore from './pages/Bookstore/Bookstore';
import HomePage from './pages/HomePage/HomePage';


function App() {
  return (
    <div className="App">
      <Router> 
      <Route exact path="/" component={Bookstore}></Route>
      <Route exact path="/home" component={HomePage}></Route>
      </Router>
    </div>
  );
}

export default App;
