
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Terms from './Terms';
const Routes = () =>{
    return(
        <Switch>
          <Route path="/terms" exact>
            <Terms />
          </Route>
        </Switch>

    )
}

export default Routes