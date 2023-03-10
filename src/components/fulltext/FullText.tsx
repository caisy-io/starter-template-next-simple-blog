import { RichTextRenderer } from "@caisy/rich-text-react-renderer";
import { CenterContainer } from "../CenterContainer";
import { DocumentLink } from "./overwrites/DocumentLink";

interface IFullText {
  text?: any;
}

export const FullText: React.FC<IFullText> = ({ text }) => {
  return (
    <CenterContainer>
      <article className="prose lg:prose-xl">
        {text?.json && <RichTextRenderer node={text?.json} />}
      </article>
    </CenterContainer>
  );
};
