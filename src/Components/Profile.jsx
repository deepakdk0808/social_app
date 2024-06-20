import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/"); // replace "/" with the path to your previous page
  };

  const handleFollowClick = () => {
    console.log("Followed");
    // update the following status here
  };

  const handleMessageClick = () => {
    navigate("/chat"); // replace "/message" with the path to your message page
    // send a message here
  };

  return (
    <div className="profile">
      <div className="header_profile">
        <button className="button-green" onClick={handleBackClick}>
          &larr;
        </button>
        <h1>Profile</h1>
        <div className="header_buttons">
          <button className="button-no-border">&hearts;</button>
          <button className="button-no-border">&#128269;</button>{" "}
          {/* Unicode for search icon */}
        </div>
      </div>
      <div className="profile-info">
        <img src="profile-pic.jpg" alt="Profile" />
        <div className="profile-actions">
          <button className="button-green:hover" onClick={handleMessageClick}>
            Message
          </button>
          <button className="button-green" onClick={handleFollowClick}>
            Follow
          </button>
        </div>
        <div className="profile-stats">
          <div>
            <p>572</p>
            <p>Posts</p>
          </div>
          <div>
            <p>6.3k</p>
            <p>Followers</p>
          </div>
          <div>
            <p>2.5k</p>
            <p>Following</p>
          </div>
        </div>
        <div className="profile-grid">
          {/* Replace "path/to/pic" with the actual paths to your pictures */}
          {Array(9)
            .fill()
            .map((_, i) => (
              <img key={i} src={`path/to/pic${i + 1}`} alt={`Pic ${i + 1}`} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
