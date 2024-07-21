import React from "react";
import WelcomeMessage from "./WelcomeMessage";
import WelcomeImages from "./WelcomeImages";

const WelcomeScreen = () => {
  return (
    <section className="flex container">
      <WelcomeMessage />
      <WelcomeImages />
    </section>
  );
};

export default WelcomeScreen;
