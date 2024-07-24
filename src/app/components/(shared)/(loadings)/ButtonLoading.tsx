import React from "react";

const ButtonLoading = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="border-white h-5 w-5 animate-spin rounded-full border-4 border-t-teal-500" />
      <p className="uppercase tracking-wider">Proccessing...</p>
    </div>
  );
};

export default ButtonLoading;
