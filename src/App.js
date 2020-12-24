import "./App.css";
import {BrowserRouter as Router, HashRouter, Switch , Route} from "react-router-dom";
import tables from "./components/tables";

function App(){
    return (
      <Router>
      <HashRouter>
        <Switch>
          
          <Route path="/" exact component={tables}/>
          {/* <Route component={Error} /> */}
          </Switch>
      </HashRouter>
    </Router>
    );
  }


export default App;