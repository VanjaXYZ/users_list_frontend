import { SkipBack } from "lucide-react";
import Link from "next/link";
import React from "react";

const BackArrow = () => {
  return (
    <Link href={"/"}>
      <SkipBack />
    </Link>
  );
};

export default BackArrow;
