import React from "react";
import ActionButtons from "./ActionButtons";

const WelcomeMessage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-semibold tracking-wider">
        Welcome to the Official User Registrator
      </h1>
      <p className="text-xl text-neutral-700">
        Find your person of interest right here in a matter of seconds! Our
        platform provides a seamless and efficient way to search for and connect
        with the individuals you need. Whether you’re looking for professional
        contacts, potential collaborators, or just want to expand your network,
        the Official User Registrator is here to help you find exactly who
        you’re looking for.
      </p>
      <div>
        <ActionButtons />
      </div>
    </div>
  );
};

export default WelcomeMessage;
