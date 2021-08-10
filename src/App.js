import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Bookstore from './pages/Bookstore/Bookstore';
import HomePage from './pages/HomePage/HomePage';
import BookDescription from './components/BookDescription/BookDescription';
import Cart from './pages/Cart/Cart';


function App() {
  return (
    <div className="App">
      <Router> 
      <Route exact path="/" component={Bookstore}></Route>
      <Route  path="/home" component={HomePage}></Route>
      <Route  path="/description" component={BookDescription}></Route>
      <Route  path="/cart" component={Cart}></Route>

      </Router>
    </div>
  );
}

export default App;
