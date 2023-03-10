import React from "react";
import { IGenPage } from "../services/graphql/__generated/sdk";
import { ComponentSelector } from "./ComponentSelector";

interface IPage {
  Page?: IGenPage | null;
}

export const Page: React.FC<IPage> = (props) => {
  return (
    <>
      {props?.Page?.components?.map(
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
