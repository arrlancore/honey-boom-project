import React, { useState } from "react";
import Head from "next/head";
import Button from "../src/components/Button";
import Header from "../src/components/Header";
import TextField from "../src/components/TextField";
import PasswordField from "../src/components/PasswordField";
import Link from "next/link";
import Table, { THead, TRow } from "../src/components/Table";
import Text from "../src/components/Text";
import SearchInput from "../src/components/SearchInput";
import arrowRightIcon from "../src/assets/icon/arrow-right-circle.svg";
import arrowLeftIcon from "../src/assets/icon/arrow-left-circle.svg";
import Image from "next/image";

const caption = {
  title: "HoneyBoom.",
  description: "GPS Summary",
  see: "see detail",
};

const tableHeads: THead[] = [
  { key: "author", title: "Author" },
  { key: "function", title: "Function" },
  { key: "status", title: "Status" },
  { key: "employed", title: "Employed" },
  { key: "action", title: "" },
];

interface IGPSSummary {
  id: string;
  author: string;
  function: string;
  status: string;
  employed: string;
  action?: string;
}

const tableRows: TRow<IGPSSummary>[] = [
  {
    id: "1",
    author: "name1",
    function: "test",
    status: "Online",
    employed: "2022-02-03T10:17:44.165Z",
  },
  {
    id: "2",
    author: "name3",
    function: "test",
    status: "Online",
    employed: "2022-02-03T10:17:44.165Z",
  },
  {
    id: "3",
    author: "name2",
    function: "test",
    status: "Online",
    employed: "2022-02-03T10:17:44.165Z",
  },
];

const renderers = {
  action: (_: unknown, gps: IGPSSummary) => {
    return (
      <Link
        title={caption.see}
        className="px-6 text-lg left-0 transition-[left] hover:text-yellow-300 hover:left-2 relative"
        href={`/detail/${gps.id}`}
      >
        {`→`}
      </Link>
    );
  },
};

export default function Login() {
  return (
    <div className="relative bg-gradient-default min-h-screen">
      <Head>
        <title>
          {caption.title} - {caption.description}
        </title>
      </Head>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* header */}
        <Header title={caption.title} />

        <main className="mt-8">
          <section
            className="flex flex-col p-4 items-center justify-center min-h-screen
            mt-[-90px]"
          >
            <div
              className="flex flex-col items-center p-14 w-full rounded-3xl border-[1px]
            text-white border-full border-gray-200 max-w-7xl"
            >
              <div>
                <Text variant="head2" className="mb-6">
                  {caption.description}
                </Text>
                <div>
                  <section className="flex justify-between">
                    <SearchInput className="bg-blue-100" />
                    <div className="flex items-center justify-center">
                      <Text variant="caption">1 of 6</Text>
                      <div className="flex ml-4">
                        <Image
                          {...arrowLeftIcon}
                          width="24"
                          height="24"
                          alt="prev"
                          className="cursor-pointer hover:opacity-50"
                        />
                        <div className="w-2" />
                        <Image
                          {...arrowRightIcon}
                          width="24"
                          height="24"
                          alt="next"
                          className="cursor-pointer hover:opacity-50"
                        />
                      </div>
                    </div>
                  </section>
                </div>
                <Table
                  rows={tableRows}
                  heads={tableHeads}
                  renderers={renderers}
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
