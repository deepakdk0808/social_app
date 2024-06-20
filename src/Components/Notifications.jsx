import React from "react";

const Notifications = () => {
  const notifications = [
    { name: "Arun K", action: "Liked your post", lastOnline: "2 minutes ago" },
    {
      name: "Ashley",
      action: "Commented on your post",
      lastOnline: "5 minutes ago",
    },
    { name: "Brian", action: "Followed you", lastOnline: "10 minutes ago" },
    {
      name: "David",
      action: "Sent you a message",
      lastOnline: "15 minutes ago",
    },
  ];

  return (
    <div className="notifications-container">
      <div className="header">
        <img src="profile-pic.jpg" alt="Profile" className="profile-pic" />
        <button className="search-button">Search</button>
      </div>
      <div className="notifications">
        <h1>Notifications ({notifications.length})</h1>
        <div className="button-group">
          <button className="show-all-button">Show All</button>
          <button className="mark-read-button">Mark All Read</button>
        </div>
        <ul>
          {notifications.map((notification, index) => (
            <li key={index}>
              <img
                src="profile-pic.jpg"
                alt="Profile"
                className="profile-pic"
              />
              <div className="notification-info">
                <h2>{notification.name}</h2>
                <p>{notification.action}</p>
                <p>{notification.lastOnline}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notifications;
