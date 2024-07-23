import React from "react";
import PeopleGroup from "@/app/assets/group_people.png";
import Image from "next/image";

const WelcomeImages = () => {
  return (
    <div className="flex justify-center items-center">
      <Image
        src={PeopleGroup}
        alt="Group of people"
        width={800}
        height={800}
        className="max-w-[320px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-[750px]"
      />
    </div>
  );
};

export default WelcomeImages;
