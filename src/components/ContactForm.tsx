import React from "react";
import { IGenContactForm } from "../services/graphql/__generated/sdk";
import { CenterContainer } from "./CenterContainer";

export const ContactForm: React.FC<IGenContactForm> = ({ headline }) => {
  return (
    <CenterContainer>
      <form action="#">
        <div className="flex flex-col justify-start items-start max-w-prose relative overflow-hidden gap-8 px-6 py-[15px] rounded-lg bg-white border border-gray-200">
          {headline && (
            <h1 className="text-xl font-semibold text-center text-black">
              {headline}
            </h1>
          )}
          <div className="flex flex-col justify-start items-start self-stretch">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow gap-2.5">
              <div className="flex justify-start items-start self-stretch relative">
                <label className="flex-grow w-96 text-sm font-semibold text-left text-gray-800">
                  Name
                </label>
              </div>
              <div className="flex justify-start items-center self-stretch flex-grow overflow-hidden rounded-md bg-white border border-gray-200">
                <input
                  type="text"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start self-stretch">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow gap-2.5">
              <div className="flex justify-start items-start self-stretch relative">
                <label className="flex-grow w-96 text-sm font-semibold text-left text-gray-800">
                  Email
                </label>
              </div>
              <div className="flex justify-start items-center self-stretch flex-grow overflow-hidden rounded-md bg-white border border-gray-200">
                <input
                  type="email"
                  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start self-stretch">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow gap-2.5">
              <div className="flex justify-start items-start self-stretch relative">
                <label className="flex-grow w-96 text-sm font-semibold text-left text-gray-800">
                  Mesage
                </label>
              </div>
              <div className="flex justify-start items-center self-stretch flex-grow overflow-hidden rounded-md bg-white border border-gray-200">
                <textarea
                  className="py-3 px-4 block w-full resize-none border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                  rows={6}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start self-stretch">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow gap-2.5">
              <button
                type="submit"
                className="py-3 px-4 w-full inline-flex selection:inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </CenterContainer>
  );
};
