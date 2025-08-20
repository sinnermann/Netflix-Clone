import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png"
import caret_img from "../../assets/caret_icon.svg"
import { useEffect, useRef } from "react";

const Navbar = () => {
 
  const navRef = useRef();

  useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY >= 80) {
      navRef.current.classList.add("nav-dark");
    } else {
      navRef.current.classList.remove("nav-dark");
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="search_icon" className="icons" />
        <p>Children</p>
        <img src={bell_icon} alt="bell_icon" className="icons" />
        <div className="navbar-profile">
          <img src={profile_img} alt="profile_icon" className="profile" />
          <img src={caret_img} alt="caret_icon"  />
          <div className="dropdown">
            <p>Sign out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
