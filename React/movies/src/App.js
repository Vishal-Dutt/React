import Movies from "./Components/Movies";
import About from "./Components/About";
import Home from "./Components/Home";
import Nav from "./Nav";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
  return (
    // <h1>Hello</h1>
    // wrap under <Router> to attain routing capability
    // <Router>
    //   {/* <Home /> */}
    //   {/* Router take two argument path and component to be rendered on path */}
    //   <Route path='/' component={Home} />
    //   {/* <Movies /> */}
    //   <Route path='/movies' component={Movies} />
    //   {/* <About /> */}
    //   <Route path='/about' component={About} />
    // </Router>

    // Problem if runs the two components 
    // if /movies component runs router it runs /homw and /movies component as router searchs
    // / and /movies in the <Router>

    // Use of Switch to counter above problem
    // Swtich Renders the first child <Route> or <Redirect> that matches the location. and it does not compare rest components.
    // This will also cause a problem as it will renders the first child that matches the location.
    // <Router>
    //   <Switch>
    //     <Route path='/' component={Home} />
    //     <Route path='/movies' component={Movies} />
    //     <Route path='/about' component={About} />
    //   </Switch>
    // </Router>

    // So to overcome the above problem so the smallest common route move it in the last position
    // But don't use this a it is not a good practice
    // <Router>
    //   <Switch>
    //     <Route path='/movies' component={Movies} />
    //     <Route path='/about' component={About} />
    //     <Route path='/' component={Home} />
    //   </Switch>
    // </Router>

    // Use exact as it exactly matches path of the component
    <Router>
      <Nav />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/movies' component={Movies} />
        {/* Passing prop */}
        {/* <Route path='/about' component={About} isAuth={true}/> */}
        {/* Render Prop */}

        {/* When we use render method the render method pass internal props to the component
          we get these props in the render callback fucntions . we can add our props and pass there props to the components*/}
        <Route path='/about' render={(props)=>(
          <About {...props} isAuth={true}/>
        )}/>
      </Switch>
    </Router>
  );
}

export default App;
