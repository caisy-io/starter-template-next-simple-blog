import React from "react";
import { IGenAsset } from "../services/graphql/__generated/sdk";

interface IAsset extends IGenAsset {
  children?: React.ReactNode;
}

export const Asset: React.FC<IAsset> = ({ src, description, children }) => {
  return (
    <>
      {src && (
        <div className="flex items-center justify-center overflow-hidden flex-wrap mt-6 mb-6 not-prose">
          <img
            loading="lazy"
            src={`${src}?w=1920&h=960`}
            srcSet={`${src}?w=3840&h=1920 1920w, ${src}?w=1920&h=960 1280w, ${src}?w=1280&h=640 640w`}
            alt={description ?? ""}
            className="rounded-lg "
          />
          {description && (
            <label className="text-gray-400 mt-3 text-center block text-xs">
              {description}
            </label>
          )}
        </div>
      )}
      {children}
    </>
  );
};
