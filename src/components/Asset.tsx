import React from "react";
import { IGenAsset } from "../services/graphql/__generated/sdk";
import { Image } from "@unpic/react";

interface IAsset extends IGenAsset {
  children?: React.ReactNode;
}

export const Asset: React.FC<IAsset> = ({ src, description, children }) => {
  return (
    <>
      {src && (
        <div className="flex items-center justify-center overflow-hidden flex-wrap mt-6 mb-6 not-prose">
          <Image
            src={src}
            cdn="bunny"
            layout="fullWidth"
            className="rounded-lg"
            alt={description ?? ""}
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
