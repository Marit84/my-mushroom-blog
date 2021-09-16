import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import NewListing from "./pages/NewListing";
import Listings from "./pages/Listings";
import Listing from "./pages/Listing";
import Map from "./pages/Map";
import NotFound from "./pages/NotFound";
import UpdateListing from "./pages/UpdateListing";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="max-w-screen-md mx-auto pt-20">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/newlisting" component={NewListing} />
          <Route exact path="/listings" component={Listings} />
          <Route exact path="/listing/:id" component={Listing} />
          <Route exact path="/updateListing/:id" component={UpdateListing} />
          <Route exact path="/map" component={Map} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
