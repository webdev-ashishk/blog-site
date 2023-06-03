import { Routes, Route, NavLink } from "react-router-dom";

import Home from "./Home";
import Welcome from "./Welcome";
import WhatWeDo from "./WhatWeDo";
import Photos from "./Photos";
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
            // src="https://as2.ftcdn.net/v2/jpg/00/83/88/57/1000_F_83885709_NMjDhh4t4mpV80TujUWrx7QKQWr446SH.jpg"
            // src="https://e7.pngegg.com/pngimages/481/8/png-clipart-comparison-of-free-blog-hosting-services-computer-icons-blog-blogger-icon-blue-logo.png"
            src="https://www.nicepng.com/png/detail/232-2326770_icon-blogger-logo-now-creative-group-logo.png"
            // src="https://thumbs.dreamstime.com/z/maple-leaf-isolated-transparent-background-bright-red-autumn-realistic-leaf-vector-illustration-eps-maple-leaf-isolated-126072815.jpg"
            className="logo"
          />

          <ul className="nav-items">
            <li>
              <NavLink to="/" className={getClass} onClick={videoShow}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/WhatWeDo" className={getClass} onClick={videoHide}>
                WhatWeDo
              </NavLink>
            </li>
            <li>
              <NavLink to="/Photos" className={getClass} onClick={videoHide}>
                Photos
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
          // src="https://media.istockphoto.com/id/1023090642/video/aerial-above-the-forest-trees-towards-the-mountains.mp4?s=mp4-640x640-is&k=20&c=zFGo7aM9MXkSLQ2WALBMg-bJAMc8swhezUkxAoh-k94="
        ></video>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="whatwedo" element={<WhatWeDo />} />
        <Route path="photos" element={<Photos />} />
        <Route
          path="*"
          element={<h1 className="not-found">404 Page not Found!!</h1>}
        />
      </Routes>
    </>
  );
}

export default Header;
