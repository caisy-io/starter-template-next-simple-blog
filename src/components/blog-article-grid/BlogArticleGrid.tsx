import React from "react";
import { IGenBlogArticleGrid } from "../../services/graphql/__generated/sdk";
import { FullContainer } from "../FullContainer";
import { ArticleCard } from "./ArticleCard";

export const BlogArticleGrid: React.FC<IGenBlogArticleGrid> = ({
  headline,
  articles,
  subheadline,
}) => {
  return (
    <FullContainer>
      <div className="flex flex-col justify-start items-center self-stretch overflow-hidden gap-14">
        <div className="flex flex-col justify-start items-center self-stretch relative gap-2.5">
          <h1 className="text-4xl font-bold text-left text-slate-900">
            {headline ?? ""}
          </h1>
          {subheadline && (
            <h3 className="text-base text-left text-gray-600">{subheadline}</h3>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles?.map((article, index) => (
            <ArticleCard {...article} key={index} />
          ))}
        </div>
      </div>
    </FullContainer>
  );
};
