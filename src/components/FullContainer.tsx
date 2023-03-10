import React from "react";

interface IFullContainer {
  children?: React.ReactNode;
}

export const FullContainer: React.FC<IFullContainer> = ({ children }) => {
  return (
    <div className="flex items-center justify-center m-10">
      <div className="max-w-screen-2xl">{children}</div>
    </div>
  );
};
