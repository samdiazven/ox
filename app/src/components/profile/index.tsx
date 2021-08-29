import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
export const Profile = () => {
  return (
    <>
      <div className=" text-gray-200 flex items-center self-start p-4 cursor-pointer hover:text-green-200">
        <FaUser />
      </div>
    </>
  );
};
