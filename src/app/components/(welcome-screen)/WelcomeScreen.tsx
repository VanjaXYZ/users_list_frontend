import React from "react";
import WelcomeMessage from "./WelcomeMessage";
import WelcomeImages from "./WelcomeImages";
import ActionButtons from "./ActionButtons";

const WelcomeScreen = () => {
  return (
    <section className="flex w-full flex-col md:flex-row min-h-screen">
      <WelcomeMessage />
      <WelcomeImages />
      <div className="flex justify-center md:hidden">
        <ActionButtons />
      </div>
    </section>
  );
};

export default WelcomeScreen;
