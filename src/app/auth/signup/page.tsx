import React from "react";

const Page = () => {
  return (
    <form>
      <h3>Welcome</h3>
      <div>
        <input type="text" name="name" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <input type="number" name="age" placeholder="Age" />
        <input type="text" name="job" placeholder="Current job" />
        <input
          type="text"
          name="work_experience"
          placeholder="Work experience"
        />
        <input type="text" name="hobbies" placeholder="Hobbies" />
      </div>
    </form>
  );
};

export default Page;
