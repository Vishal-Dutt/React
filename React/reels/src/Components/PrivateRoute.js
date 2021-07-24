import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

// component prop in Component and rest props in {...rest}
// Destructuring the props passed to PrivateRoute Component
// component is destructured as Component and exact and path is in the rest object

function PrivateRoute({ component: Component }, { ...rest }) {
    const { currentUser } = useContext(AuthContext);

    return (
        // If we pass the prop to the passing component the we will not be able to use normat route 
        // So we use Routerender method to pass the props to the component
        // Render is callback function which pass props of the route (history,match,location props)
        // We use spred Because if will not be able to indentify the props and consiter the prop with the name prop
        // If we want to give other prop the we use isAuth={true} to tell the prop passing
        // Use of Private Router is if the user is not logged in the the app should not show the feed page
        // It will redirect the route to the login

        // Path exact props passed and render the component.
        // We have to return a component which needs to be rendered.
        <Route {...rest} render={props => {
            // Must Return Component
            // If currentUser is logged in then log then show the feed component if user is not logged in then redirect to the login page. 
            // if {...props} is not passed as spred then it will consider the value as boolean property(it will give an error).
            return currentUser ? <Component {...props} /> : <Redirect to='/login' />
        }} />
    )
}

export default PrivateRoute
