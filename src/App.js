import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Bookstore from './pages/Bookstore/Bookstore';


function App() {
  return (
    <div className="App">
      <Router> 
      <Route path="/" component={Bookstore}></Route>
     </Router>
    </div>
  );
}

export default App;
