import "./App.css";
import {
  Link,
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Python from "./Pages/Python";
import Javascript from "./Pages/Javascript";
import Topic1 from "./Pages/Topic1";
import Error from "./Pages/Error";
import Topic2 from "./Pages/Topic2";
import Topic3 from "./Pages/Topic3";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Python />} />
          <Route path="/javascript" element={<Javascript />} />
          <Route path="/topic1" element={<Topic1 />} />
          <Route path="/topic2" element={<Topic2 />} />
          <Route path="/topic3" element={<Topic3 />} />
          <Route path="*" element={<Error />} />
        </Routes>
        {/* <footer>coptRight@2020</footer> */}
      </Router>
    </div>
  );
}

function Navigation() {
  const location = useLocation();

  return (
    <nav>
      <ul className="menu">
        <li>
          <Link
            className={`link ${location.pathname === "/" ? "active" : ""}`}
            to="/"
          >
            Python
          </Link>
        </li>
        <li>
          <Link
            className={`link ${
              location.pathname === "/javascript" ? "active" : ""
            }`}
            to="/javascript"
          >
            JavaScript
          </Link>
        </li>
        <li>
          <Link
            className={`link ${
              location.pathname === "/topic1" ? "active" : ""
            }`}
            to="/topic1"
          >
            Topic1
          </Link>
        </li>
        <li>
          <Link
            className={`link ${
              location.pathname === "/topic2" ? "active" : ""
            }`}
            to="/topic2"
          >
            Topic2
          </Link>
        </li>
        <li>
          <Link
            className={`link ${
              location.pathname === "/topic3" ? "active" : ""
            }`}
            to="/topic3"
          >
            Topic3
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default App;
