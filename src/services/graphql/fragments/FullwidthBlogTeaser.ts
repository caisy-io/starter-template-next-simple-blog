import { gql } from "graphql-request";

export const f_FullwidthBlogTeaser = gql`
  fragment FullwidthBlogTeaser on FullwidthBlogTeaser {
    id
    featuredArticle {
      id
      slug
      teaserImage {
        ...Asset
      }
      text {
        connections {
          __typename
          ... on Asset {
            ...Asset
          }
        }
        json
      }
      author{
        ...Author
      }
      category{
        ...Category
      }
      teaserHeadline
      teaserDesciption
    }
    id
  }
`;
