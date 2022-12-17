import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import arrowRightIcon from "../src/assets/icon/arrow-right-circle.svg";
import arrowLeftIcon from "../src/assets/icon/arrow-left-circle.svg";
import Image from "next/image";
import Table, { THead, TRow } from "../../src/components/Table";
import Header from "../../src/components/Header";
import Text from "../../src/components/Text";
import SearchInput from "../../src/components/SearchInput";
import { useRouter } from "next/router";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../src/store";
import { IGPSSummary } from "../../src/types";
import { getGpsDetailByID } from "../../src/store/gps/gpsAction";
import localStorageService from "../../src/services/localStorageService";

const createPieData = (list: IGPSSummary[]) => {
  const raw = list.reduce((acc: { [key: string]: number }, value) => {
    const count = acc[value.location] ? acc[value.location] + 1 : 1;
    acc[value.location] = count;

    return acc;
  }, {});

  return Object.keys(raw).map((key) => ({
    name: key,
    value: raw[key],
  }));
};

const COLORS = ["#FFBB28", "#FF8042"];

const renderActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`PV ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const caption = {
  title: "HoneyBoom.",
  description: "GPS Detail",
  aircraft: "AirCraft",
};

const tableHeads: THead[] = [
  { key: "timestamp", title: "Timestamp" },
  { key: "location", title: "Location" },
];

export default function Detail() {
  const router = useRouter();
  const { id } = router.query;
  const [activeIndex, setActiveIndex] = useState(0);

  const dispatch = useDispatch<AppDispatch>();
  const gps = useSelector((state: RootState) => state.gps);
  const tableRows: TRow<IGPSSummary>[] = gps.gpsDetailByID;
  const pieData = createPieData(gps.gpsDetailByID);

  const onPieEnter = (_: unknown, index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    if (id) {
      dispatch(
        getGpsDetailByID({
          token: localStorageService.getToken() ?? "",
          id: id as string,
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

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
                <Text variant="head2">{id}</Text>
                <Text variant="head2" className="mb-6">
                  {caption.aircraft}
                </Text>
                <div className="flex items-center">
                  <Table rows={tableRows} heads={tableHeads} />
                  <ResponsiveContainer
                    width="100%"
                    height="100%"
                    className="min-w-[400px] min-h-[400px]"
                  >
                    <PieChart width={400} height={400}>
                      <Pie
                        activeIndex={activeIndex}
                        activeShape={renderActiveShape}
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        onMouseEnter={onPieEnter}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
