import React, { PropsWithChildren } from "react";
import { IGenAsset } from "../../../services/graphql/__generated/sdk";
import { Asset } from "../../Asset";

interface IDocumentLink {
  children?: React.ReactNode;
  connections?: any;
  node?: any;
}

export const DocumentLink: React.FC<IDocumentLink> = ({ ...props }) => {
  console.log({ propsDOCLINK: props });
  return (
    <>
      {/* {connections == node?.attrs?.documentId && <Asset {...connections} />}
      {children} */}
    </>
  );
};
