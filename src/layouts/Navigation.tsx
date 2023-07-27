import Link from "next/link";
import React from "react";
import { IGenNavigation } from "../services/graphql/__generated/sdk";
import { useRouter } from "next/router";

export const Navigation: React.FC<IGenNavigation> = ({ entries, homePage }) => {
  const { query } = useRouter();
  const slug = query?.slug;

  return (
    <header className="flex flex-wrap m-10 z-50 bg-white text-sm">
      <nav className="mx-auto" aria-label="Global">
        <div className="flex items-end flex-col justify-between flex-end">
          <div className="flex gap-5 flex-row flex-wrap items-center justify-center mt-0">
            {entries?.map((entry) => {
              if (!entry?.title || !entry.connection?.slug) {
                return null;
              }
              const active =
                entry.connection?.slug === slug ||
                (slug === undefined &&
                  entry.connection?.slug === homePage?.slug);
              if (active) {
                return (
                  <Link
                    key={entry.id}
                    href={"/" + entry.connection?.slug}
                    passHref
                    className="font-medium text-blue-500"
                    aria-current="page"
                  >
                    {entry?.title}
                  </Link>
                );
              }
              return (
                <Link
                  key={entry.id}
                  href={"/" + entry.connection?.slug}
                  passHref
                  className="font-medium text-gray-600 hover:text-gray-400"
                >
                  {entry?.title}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
};
