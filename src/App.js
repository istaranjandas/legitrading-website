import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Blogs from "./pages/blogs/Blogs";
import Courses from "./pages/courses/Courses";
import { Navbar } from "react-bootstrap";
import Search from "./pages/search/Search";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/course" component={Courses} />
          <Route path="/blog" component={Blogs} />
          <Route path="/search" component={Search} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
