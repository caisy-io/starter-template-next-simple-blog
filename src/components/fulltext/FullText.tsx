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
  return (
    <CenterContainer>
      <article className="prose lg:prose-xl">
        {text?.json && (
          <RichTextRenderer
            node={text?.json}
            overwrites={{
              // @ts-ignore
              documentLink: (props) =>
                props?.node && text?.connections ? (
                  <DocumentLink
                    node={props.node}
                    connections={text.connections}
                  />
                ) : null,
            }}
          />
        )}
      </article>
    </CenterContainer>
  );
};
