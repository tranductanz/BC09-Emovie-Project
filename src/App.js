import './App.css';
import { createBrowserHistory } from 'history'
import { Route, Router, Switch } from 'react-router';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import News from './pages/News/News';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Detail from './pages/Detail/Detail';
import CheckoutTemplate from './templates/CheckoutTemplate/CheckoutTemplate';
import Checkout from './pages/Checkout/Checkout';
import { Suspense, lazy } from 'react';
import LazyLoading from './templates/CheckoutTemplate/LazyLoading';
import { UserTemplate } from './templates/UserTemplate/UserTemplate';
import Loading from './components/Loading/Loading';

const CheckoutTemplateLazyLoading = lazy(() => import('./templates/CheckoutTemplate/CheckoutTemplate'));
export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Loading />
      <Switch>
        <HomeTemplate path="/contact" Component={Contact} />
        <HomeTemplate path="/news" Component={News} />
        <HomeTemplate path="/home" exact Component={Home} />
        <HomeTemplate path="/detail/:id" exact Component={Detail} />

        <UserTemplate path="/register" exact Component={Register} />


        <UserTemplate path="/login" exact Component={Login} />
        <HomeTemplate path="/" exact Component={Home} />
        <Suspense fallback={
          <LazyLoading />
        }>
          <CheckoutTemplateLazyLoading path="/checkout/:id" exact Component={Checkout} />
        </Suspense>
      </Switch>

    </Router>
  );
}

export default App;
