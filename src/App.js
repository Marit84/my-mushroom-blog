import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import About from "./pages/About";
import Listings from "./pages/Listings";
import Listing from "./pages/Listing";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="max-w-screen-md mx-auto pt-20">
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/listings" component={Listings} />
        <Route exact path="/listing" component={Listing} />
      </div>
    </Router>
  );
}

export default App;
