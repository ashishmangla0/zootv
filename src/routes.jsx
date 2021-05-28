import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import React, { Suspense, lazy } from 'react'
const Terms = lazy(() => import('./Pages/Terms'));
const Home = lazy(() => import('./Pages/Home'));
const Policy = lazy(() => import('./Pages/Policy'));
const SignIn = lazy(() => import('./Pages/Signin'));
const SignUp = lazy(() => import('./Pages/Signup'));
const Routes = () => {
    return (
        <Suspense fallback={<div>
            Loading
        </div>}>
        <Switch>
            <Route path="/signup" exact>
                <SignUp />
            </Route>
            <Route path="/signin" exact>
                <SignIn />
            </Route>
            <Route path="/terms" exact>
                <Terms />
            </Route>
            <Route path="/policy" exact>
                <Policy />
            </Route>
            <Route path="/" exact>
                <Home />
            </Route>
        </Switch>



        </Suspense>

    )
}
export default Routes