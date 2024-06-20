import React from "react";
import { useNavigate } from "react-router-dom";

const Followers = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/"); 
  };

  const handleFollowClick = (followerName, index) => {
    console.log(`Followed ${followerName}`);
    // update the following status of the follower
    let updatedFollowers = [...followers];
    updatedFollowers[index].isFollowing = !updatedFollowers[index].isFollowing;
    setFollowers(updatedFollowers);
  };

  
  const handleProfileClick = () => {
    navigate("/profile");
  };

  const [followers, setFollowers] = React.useState([
    {
      name: "Shah Rukh Khan",
      username: "srk",
      profilePic: "path/to/pic1",
      isFollowing: false,
    },
    {
      name: "Robert Downey Jr.",
      username: "rdj",
      profilePic: "path/to/pic2",
      isFollowing: false,
    },
    // add more followers as needed
  ]);

  return (
    <div className="followers">
      <div className="header_followers">
        <button
          style={{ backgroundColor: "green", borderRadius: "5px" }}
          onClick={handleBackClick}
        >
          &larr;
        </button>
        <h1>Followers</h1>
      </div>
      <ul>
        {followers.map((follower, index) => (
          <li key={index} className="follower-item">
            <img src={follower.profilePic} alt={follower.name} />
            <div className="follower-info">
              <h2 onClick={handleProfileClick}>{follower.name}</h2>
              <p onClick={handleProfileClick}>@{follower.username}</p>
            </div>
            <button
              style={{
                backgroundColor: follower.isFollowing ? "white" : "green",
                color: follower.isFollowing ? "black" : "white",
                borderRadius: "5px",
              }}
              onClick={() => handleFollowClick(follower.name, index)}
            >
              {follower.isFollowing ? "Following" : "Follow"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Followers;
