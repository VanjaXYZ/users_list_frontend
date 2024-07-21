import React from "react";
import PeopleGroup from "@/app/assets/group_people.png";
import Image from "next/image";

const WelcomeImages = () => {
  return (
    <Image
      src={PeopleGroup}
      alt="Group of people"
      width={800}
      height={800}
      className="max-w-[750px]"
    />
  );
};

export default WelcomeImages;
