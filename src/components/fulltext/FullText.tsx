import { RichTextRenderer } from "@caisy/rich-text-react-renderer";
import { FC } from "react";
import { Asset } from "../Asset";
import { CenterContainer } from "../CenterContainer";
import { DocumentLink } from "./overwrites/DocumentLink";

interface IFullText {
  text?: any;
}

export const FullText: React.FC<IFullText> = ({ text }) => {
  console.log(` text?.connections`, text);

  // const DocumentLink: FC<{ node: any }> = ({ node }) => {
  //   console.log(` node`, node);
  //   const targetDocumentId = node?.attrs?.documentId;
  //   if (!targetDocumentId) return null;

  //   return (
  //     text.connections?.map((connection: any) => {
  //       console.log(connection);
  //       if (
  //         connection?.id === targetDocumentId &&
  //         connection.__typename === "Asset"
  //       ) {
  //         return <Asset {...connection} />;
  //       }

  //       return null;
  //     }) ?? null
  //   );
  // };

  return (
    <CenterContainer>
      <article className="prose lg:prose-xl">
        {text?.json && (
          <RichTextRenderer
            node={text?.json}
            // connections={text?.connections}
            overwrites={{
              // @ts-ignore
              documentLink: (props) => {
                return (
                  <DocumentLink
                    node={props.node}
                    connections={text.connections}
                  />
                );
              },
            }}
          />
        )}
      </article>
    </CenterContainer>
  );
};
