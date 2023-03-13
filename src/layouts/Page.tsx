import React from "react";
import { IGenPage } from "../services/graphql/__generated/sdk";
import { ComponentSelector } from "./ComponentSelector";

export const Page: React.FC<IGenPage> = (props) => {
  return (
    <>
      {props?.components?.map(
        (component) =>
          component && (
            <React.Fragment key={component.id}>
              <ComponentSelector component={component} />
            </React.Fragment>
          )
      )}
    </>
  );
};
