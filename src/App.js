import './App.css';
import { Container } from "reactstrap"
import Navi from "./components/Navi"
import CartDetail from "./components/CartDetail"
import Dashboard from "./components/Dashboard"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Container>
        <Navi />
        <Switch>
          <Route path="/" exact component={Dashboard} /> 
          <Route path="/cart" exact component={CartDetail} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
