import React from "react";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="menu">
      <div className="header">
        <img src="profile-pic.jpg" alt="Profile" className="profile-pic" />
        <div className="user-info">
          <h2 className="name">Name</h2>
          <p className="username">@username</p>
        </div>
      </div>
      <div className="stats">
        <div className="stat">
          <h3>572</h3>
          <p>Posts</p>
        </div>
        <div className="stat">
          <h3>6.3k</h3>
          <p>Followers</p>
        </div>
        <div className="stat">
          <h3>2.5k</h3>
          <p>Following</p>
        </div>
      </div>
      <div className="menu-items">
        <div
          className="menu-item"
          onClick={() => handleNavigation("/followers")}
        >
          <span>Notifications</span>
          <span className="arrow">→</span>
        </div>
        <div
          className="menu-item"
          onClick={() => handleNavigation("/followers")}
        >
          <span>Friends</span>
          <span className="arrow">→</span>
        </div>
        <div
          className="menu-item"
          onClick={() => handleNavigation("/followers")}
        >
          <span>Messages</span>
          <span className="arrow">→</span>
        </div>
        <div
          className="menu-item"
          onClick={() => handleNavigation("/followers")}
        >
          <span>Albums</span>
          <span className="arrow">→</span>
        </div>
        <div
          className="menu-item"
          onClick={() => handleNavigation("/followers")}
        >
          <span>Favourites</span>
          <span className="arrow">→</span>
        </div>
        <div
          className="menu-item"
          onClick={() => handleNavigation("/followers")}
        >
          <span>Privacy Policy</span>
          <span className="arrow">→</span>
        </div>
      </div>
      <button className="logout-button">Logout</button>
    </div>
  );
}

export default Menu;
