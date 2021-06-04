import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Home />
    </Router>
  );
};

export default App;
