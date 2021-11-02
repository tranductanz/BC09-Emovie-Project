import './App.css';
import { createBrowserHistory } from 'history'
import { Route, Router, Switch } from 'react-router';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import News from './pages/News/News';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';


export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>

        <HomeTemplate path="/contact" Component={Contact} />
        <HomeTemplate path="/news" Component={News} />
        <HomeTemplate path="/home" exact Component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <HomeTemplate path="/" exact Component={Home} />
      </Switch>

    </Router>
  );
}

export default App;
