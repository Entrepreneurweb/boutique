import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Link,  Switch } from 'react-router-dom';
import NavBar from './components/Navbar';
import AddProductForm from './components/Addprod';
import ProductsList from './components/Afficherprod';
import { Ui } from './components/Ui';
import Supprimer from './components/deleteprod';


function App() {
  return (
    <div className="App"  style={{ backgroundColor:"#f8edeb"}} >
       <Router>
        <Switch>
          <Route path="/" exact component={Ui} />
         //
         
          <Route path="/admin" component={AddProductForm} />
          <Route path="/supprimer" component={Supprimer} />
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
