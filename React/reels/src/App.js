// import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup';
import AuthProvider from './Context/AuthProvider';
import Main from './MaterialUI/Main';

import Login from './Components/Login';
import Ioa from './Components/Ioa';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Feed from './Components/Feed';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  return (
    // <AuthProvider>
    //   <>
    //     {/* <h1>Hello</h1> */}
    //     <Signup />
    //     {/* <Login/> */}
    //   </>
    // </AuthProvider>
    // // <Main/>
    // <Ioa/>
    <Router>
      <AuthProvider>
        <Switch>
          {/* exact path and compoent props is passed to the PrivateRouter Component*/}
          <PrivateRoute exact path='/' component={Feed} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
