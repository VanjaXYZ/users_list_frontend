import React from "react";

const Page = () => {
  return (
    <form>
      <h3>Welcome</h3>
      <div>
        <input type="text" name="name" />
        <input type="password" name="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Page;
