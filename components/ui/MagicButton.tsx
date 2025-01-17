import React from "react";

const MagicButton = ({
  title,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button className="p-[3px] relative w-full rounded-lg " onClick={handleClick}>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
      <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
        {title}
      </div>
    </button>
  );
};

export default MagicButton;
