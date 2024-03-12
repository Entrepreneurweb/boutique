import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Link,  Switch } from 'react-router-dom';
import NavBar from './components/Navbar';
import AddProductForm from './components/Addprod';
import ProductsList from './components/Afficherprod';
import { Ui } from './components/Ui';
import Supprimer from './components/deleteprod';
import { Administration } from './components/Administration';
import Formulaire from './components/Login';



function App() {
  return (
    <div className="App"  style={{ backgroundColor:"#f8edeb"}} >
       <Router>
        <Switch>
          <Route path="/" exact component={Ui} />
         
         
          <Route path="/admin" exact component={Formulaire} />
          
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
