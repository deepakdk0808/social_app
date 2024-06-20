import React from "react";
import { useNavigate } from "react-router-dom";

const Onboarding = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/sign-in");
  };

  return (
    <div className="onboarding">
      <img
        src="/image/chat_image.webp"
        alt="Onboarding"
        className="onboarding-image"
      />
      <h1>Let's connect with each other</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor.
      </p>
      <button onClick={handleGetStarted} className="get-started-button">
        Get started
      </button>
    </div>
  );
};

export default Onboarding;
