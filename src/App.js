import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Bookstore from './pages/Bookstore/Bookstore';
import HomePage from './pages/HomePage/HomePage';
import BookDescription from './components/BookDescription/BookDescription';
import Cart from './pages/Cart/Cart';
import WishList from './pages/WishList/WishList';
import AuthRouter from './components/AuthRouter/AuthRouter';
import ProtectedRouter from './components/ProtectedRoute/ProtectedRoute';


function App() {
  return (
    <div className="App">
      <Router> 
      <AuthRouter exact path="/" component={Bookstore}></AuthRouter>
      <ProtectedRouter  path="/home" component={HomePage}></ProtectedRouter>
      <ProtectedRouter  path="/description" component={BookDescription}></ProtectedRouter>
      <ProtectedRouter  path="/cart" component={Cart}></ProtectedRouter>
      <ProtectedRouter  path="/wishlist" component={WishList}></ProtectedRouter>


      </Router>
    </div>
  );
}

export default App;
