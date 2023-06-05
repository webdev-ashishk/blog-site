import { Routes, Route, NavLink } from "react-router-dom";

import Home from "./Home";
import Welcome from "./Welcome";
import WhatWeDo from "./WhatWeDo";
import Photos from "./Photos";
import JoinUS from "./JoinUS";
import ContactUS from "./ContactUS";
import Donate from "./Donate";
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
          {/* <img src=" https://img.freepik.com/free-vector/tree-with-green-leaves-sticker-white-background_1308-77128.jpg?size=626&ext=jpg&ga=GA1.2.2005057808.1685522654&semt=ais" /> */}
          <NavLink to="/">
            <svg
              id="logo-16"
              width="109"
              height="43"
              viewBox="0 0 109 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <path
                d="M64.9315 11.4284C62.1883 8.6852 58.9316 6.5091 55.3475 5.0245C51.7633 3.5399 47.9219 2.7758 44.0424 2.7758C40.1629 2.7758 36.3215 3.5399 32.7373 5.0245C29.1532 6.5091 25.8965 8.6852 23.1533 11.4284L44.0424 32.3174L64.9315 11.4284Z"
                class="ccompli1"
                fill="#FFD200"
              ></path>{" "}
              <path
                d="M44.0686 32.3475C46.8118 35.0907 50.0684 37.2667 53.6526 38.7513C57.2367 40.2359 61.0782 41 64.9577 41C68.837 41 72.679 40.2359 76.263 38.7513C79.847 37.2667 83.104 35.0907 85.847 32.3475L64.9577 11.4584L44.0686 32.3475Z"
                class="ccompli2"
                fill="#06E07F"
              ></path>{" "}
              <path
                d="M44.017 32.3429C41.2738 35.0861 38.0171 37.2621 34.433 38.7467C30.8488 40.2313 27.0074 40.9954 23.1279 40.9954C19.2484 40.9954 15.407 40.2313 11.8228 38.7467C8.2387 37.2621 4.982 35.0861 2.2388 32.3429L23.1279 11.4538L44.017 32.3429Z"
                class="ccustom"
                fill="#E3073C"
              ></path>{" "}
              <path
                d="M64.9831 11.433C67.726 8.6898 70.983 6.5138 74.567 5.0292C78.151 3.5446 81.993 2.7805 85.872 2.7805C89.752 2.7805 93.593 3.5446 97.177 5.0292C100.761 6.5138 104.018 8.6898 106.761 11.433L85.872 32.3221L64.9831 11.433Z"
                class="ccustom"
                fill="#1F84EF"
              ></path>{" "}
            </svg>
          </NavLink>

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
            <li>
              <NavLink to="/JoinUS" className={getClass} onClick={videoHide}>
                Join US
              </NavLink>
            </li>
            <li>
              <NavLink to="/ContactUS" className={getClass} onClick={videoHide}>
                Contact US
              </NavLink>
            </li>
            <li id="donate">
              <NavLink to="/Donate" onClick={videoHide} className={getClass}>
                Donate
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
        <Route path="joinus" element={<JoinUS />} />
        <Route path="contactus" element={<ContactUS />} />
        <Route path="donate" element={<Donate />} />
        <Route
          path="*"
          element={<h1 className="not-found">404 Page not Found!!</h1>}
        />
      </Routes>
    </>
  );
}

export default Header;
