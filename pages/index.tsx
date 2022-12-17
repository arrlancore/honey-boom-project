import React, { useEffect } from "react";
import Head from "next/head";
import Header from "../src/components/Header";
import Link from "next/link";
import Table, { THead, TRow } from "../src/components/Table";
import Text from "../src/components/Text";
import SearchInput from "../src/components/SearchInput";
import arrowRightIcon from "../src/assets/icon/arrow-right-circle.svg";
import arrowLeftIcon from "../src/assets/icon/arrow-left-circle.svg";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../src/store";
import { getGpsSummaries } from "../src/store/gps/gpsAction";
import localStorageService from "../src/services/localStorageService";
import { IGPSSummary } from "../src/types";
import { formatDateTime, handleUnauthorizedRequest } from "../src/utils";
import BackdropLoading from "../src/components/BackdropLoading";
import { useRouter } from "next/router";
import { logOut } from "../src/store/user/userSlice";
import Layout from "../src/components/Layout";

const caption = {
  title: "HoneyBoom.",
  description: "GPS Summary",
  see: "see detail",
};

const tableHeads: THead[] = [
  { key: "device_id", title: "ID" },
  { key: "device_type", title: "Device Type" },
  { key: "timestamp", title: "Timestamp" },
  { key: "location", title: "Location" },
  { key: "action", title: "" },
];

const customRenderers = {
  timestamp: (value: string) => <span>{formatDateTime(value)}</span>,
  action: (_: unknown, gps: IGPSSummary) => {
    return (
      <Link
        title={caption.see}
        className="px-6 text-lg left-0 transition-[left] hover:text-yellow-300 hover:left-2 relative"
        href={`/detail/${gps.device_id}`}
      >
        {`→`}
      </Link>
    );
  },
};

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const gps = useSelector((state: RootState) => state.gps);
  const tableRows: TRow<IGPSSummary>[] = gps.gpsSummaries;
  const router = useRouter();

  useEffect(() => {
    dispatch(getGpsSummaries(localStorageService.getToken() ?? ""));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(logOut);
    handleUnauthorizedRequest(gps.errorCode, () => router.push("/login"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gps.errorCode]);

  return (
    <Layout>
      <div className="relative bg-gradient-default min-h-screen">
        <BackdropLoading open={gps.loading} />
        <Head>
          <title>
            {caption.title} - {caption.description}
          </title>
        </Head>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* header */}
          <Header title={caption.title} />

          <main className="mt-[90px]">
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
                    renderers={customRenderers}
                  />
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </Layout>
  );
}
