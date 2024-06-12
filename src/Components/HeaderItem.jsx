import React from "react";

const HeaderItem = ({ name, Icon }) => {
  return (
    <div className="flex items-center gap-2 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8 mb-3">
      <Icon />
      <h2 className="">{name}</h2>
    </div>
  );
};

export default HeaderItem;
