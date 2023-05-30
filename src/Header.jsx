import { Routes, Route, NavLink } from "react-router-dom";

import Home from "./Home";
import Welcome from "./Welcome";
import Categories from "./Categories";
import Category from "./Category";
function Header() {
  const getClass = ({ isActive }) => (isActive ? "nav-active" : null);
  <h1>App rendered!</h1>;

  return (
    <>
      <div className="nav-container sticky-top bg-dark">
        <nav>
          <ul>
            <li>
              <NavLink to="/" className={getClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/categories" className={getClass}>
                Categories
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="video position-fixed">
        <video
          autoPlay
          loop
          muted
          src="https://www.shutterstock.com/shutterstock/videos/1090518119/preview/stock-footage-india-flag-flying-high-at-connaught-place-with-pride-in-blue-sky-india-flag-fluttering-indian.webm"
        ></video>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="categories" element={<Categories />}>
          <Route path="category" element={<Category />} />
        </Route>
        <Route
          path="*"
          element={<h1 className="not-found">404 Page not Found!!</h1>}
        />
      </Routes>
    </>
  );
}

export default Header;
