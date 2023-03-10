import React from "react";
import { IGenNewsletterSignup } from "../services/graphql/__generated/sdk";
import { CenterContainer } from "./CenterContainer";

export const NewsletterSignup: React.FC<IGenNewsletterSignup> = ({
  headline,
  subheadline,
}) => {
  return (
    <CenterContainer>
      <div className="flex flex-col justify-start items-center py-14">
        <div className="flex flex-col justify-start items-center gap-2.5">
          {headline && (
            <h2 className="text-4xl text-center font-bold text-slate-900">
              {headline}
            </h2>
          )}
          {subheadline && (
            <p className="max-w-prose text-base text-center text-gray-600">
              {subheadline}
            </p>
          )}
        </div>
        <form action="#">
          <div className="items-center mx-auto my-3 max-w-screen-sm flex justify-center align-center">
            <div className="relative w-full">
              <label
                htmlFor="email"
                className="hidden mb-2 text-sm font-medium"
              >
                Email address
              </label>
              <input
                className="min-w-[100px] sm:min-w-[300px] lg:min-w-[534px] selection:shadow-xs py-3 px-4 block w-full border border-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-5"
                placeholder="Enter your email"
                type="email"
                id="email"
                required
              />
            </div>
            <div className="ml-2 mr-0 mt-0 mb-0">
              <button
                type="submit"
                className="py-3 px-3 w-full text-center selection:inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm sm:p-5"
              >
                Subscribe
              </button>
            </div>
          </div>
        </form>
        <div className="flex flex-col justify-start items-start relative gap-1">
          <p className="text-xs text-center text-gray-400">
            By subscribing you accept to receive recurring newsletter emails
          </p>
        </div>
      </div>
    </CenterContainer>
  );
};
