"use client";
import { RichTextRenderer } from "@caisy/rich-text-react-renderer";
import React from "react";
import { IGenFooter } from "../services/graphql/__generated/sdk";

export const Footer: React.FC<IGenFooter> = ({ content }) => {
  return (
    <div className="flex items-center justify-center">
      <footer className="prose pb-10 pt-20 flex items-center justify-center">
        {content?.json && <RichTextRenderer node={content?.json} />}
      </footer>
    </div>
  );
};
