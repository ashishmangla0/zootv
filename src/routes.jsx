import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Terms from './Pages/Terms';
import Home from './Pages/Home';
import Policy from './Pages/Policy';
const Routes = () => {
    return (
        <Switch>
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
    )
}

export default Routes