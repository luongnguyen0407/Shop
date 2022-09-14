import { DATA_CHAR } from "assets/Const";
import React, { useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CharMonth = () => {
  const TAB = ["Today", "Week", "Month", "Year"];
  const { CHAR_TODAY, CHAR_WEEK, CHAR_MONTH, CHAR_YEAR } = DATA_CHAR;
  const [tab, setTab] = useState("Today");
  const [data, setData] = useState(CHAR_TODAY);
  const handleActiveTab = (i) => {
    setTab(i);
    switch (i) {
      case "Today":
        setData(CHAR_TODAY);
        return;
      case "Week":
        setData(CHAR_WEEK);
        return;
      case "Month":
        setData(CHAR_MONTH);
        return;
      case "Year":
        setData(CHAR_YEAR);
        return;
      default:
        return;
    }
  };
  return (
    <>
      <div className="flex mt-5">
        <div className="flex overflow-hidden border rounded-md border-secondary tab_short">
          {TAB.map((item, index) => (
            <div
              key={index}
              onClick={() => handleActiveTab(item)}
              className={`${
                tab === item ? "active" : ""
              } text-center min-w-[63px] py-3 leading-3 cursor-pointer rounded-md`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5">
        <ResponsiveContainer height={250}>
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
            <Line type="monotone" dataKey="expense" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default CharMonth;
