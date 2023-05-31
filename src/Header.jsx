import { Routes, Route, NavLink } from "react-router-dom";

import Home from "./Home";
import Welcome from "./Welcome";
import Categories from "./Categories";
import Category from "./Category";
function Header() {
  const getClass = ({ isActive }) => (isActive ? "nav-active" : null);
  <h1>App rendered!</h1>;

  function videoHide() {
    const getVideo = document.getElementById("video");
    getVideo.style.display = "none";
  }
  function videoShow() {
    const getVideo = document.getElementById("video");
    getVideo.style.display = "block";
  }
  return (
    <>
      <div className="nav-container sticky-top">
        <nav>
          <img
            // src="https://www.onblastblog.com/wp-content/uploads/2017/08/blogger-logo-624x357.jpg"
            src="https://as2.ftcdn.net/v2/jpg/00/83/88/57/1000_F_83885709_NMjDhh4t4mpV80TujUWrx7QKQWr446SH.jpg"
            className="logo"
          />

          <ul>
            <li>
              <NavLink to="/" className={getClass} onClick={videoShow}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/categories"
                className={getClass}
                onClick={videoHide}
              >
                Categories
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="video position-fixed" id="video">
        <video
          autoPlay
          loop
          muted
          // src="https://www.shutterstock.com/shutterstock/videos/1090518119/preview/stock-footage-india-flag-flying-high-at-connaught-place-with-pride-in-blue-sky-india-flag-fluttering-indian.webm"
          // moving earth
          // src="https://media.istockphoto.com/id/1459585081/video/digital-abstract-network-grid-over-the-earth-artificial-intelligence-neural-network-growing.mp4?s=mp4-640x640-is&k=20&c=-vKDwYFF-onrZVZJR9hdA1V89xkq1pqG6qbKL0s9quo="
          // src="https://media.istockphoto.com/id/891396730/video/female-uses-laptop-for-browsing-social-networks-site-scrolling-webpage-wall-over-the-shoulder.mp4?s=mp4-640x640-is&k=20&c=teVB0HxnB6BFllcfOD6ybm7-Jb6xqwjwcFal5XB-Tks="
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
