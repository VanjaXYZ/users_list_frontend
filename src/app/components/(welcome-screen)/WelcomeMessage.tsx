import ActionButtons from "./ActionButtons";

const WelcomeMessage = () => {
  return (
    <div className="space-y-1 md:space-y-10 lg:p-20 p-2">
      <h1 className="text-xl md:text-4xl font-semibold tracking-wider p-1 text-center">
        Welcome to the Official User Registrator
      </h1>
      <p className="text-lg md:text-2xl p-1 text-neutral-700">
        Find your person of interest right here in a matter of seconds! Our
        platform provides a seamless and efficient way to search for and connect
        with the individuals you need. Whether you’re looking for professional
        contacts, potential collaborators, or just want to expand your network,
        the <strong>Official User Registrator</strong> is here to help you find
        exactly who you’re looking for.
      </p>
      <div className="md:flex justify-center hidden">
        <ActionButtons />
      </div>
    </div>
  );
};

export default WelcomeMessage;
