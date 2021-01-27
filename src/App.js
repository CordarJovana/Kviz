import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
    <Router>
     <Navbar />
     <Switch>
       <Route path="/" exact component={Home} />
       <Route path="/about" exact component={About} />
     </Switch>
    </Router>
    </div>
    <Footer />
    </div>
  );
}

export default App;
