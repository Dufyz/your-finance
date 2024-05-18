"use client";

import "./../styles.css";
import React from "react";

import {
  ComposedChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar
} from "recharts";

const barChartData = [
  {
    name: "Page A",
    target: 4000,
    real: 2400
  },
  {
    name: "Page B",
    target: 3000,
    real: 1398
  },
  {
    name: "Page C",
    target: 2000,
    real: 9800
  },
  {
    name: "Page D",
    target: 2780,
    real: 3908
  },
  {
    name: "Page E",
    target: 1890,
    real: 4800
  },
  {
    name: "Page F",
    target: 2390,
    real: 3800
  },
  {
    name: "Page G",
    target: 3490,
    real: 4300
  }
];

export default function SavingsChart() {
  return (
    <div className="col-span-3 flex min-h-72 w-full items-center justify-center rounded-md border bg-white p-4 shadow-md">
      {barChartData.length > 0 && (
        <BarChart width={1200} height={380} data={barChartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="target" fill="#8884d8" />
          <Bar dataKey="real" fill="#82ca9d" />
        </BarChart>
      )}
      {barChartData.length === 0 && (
        <div className="text-muted-foreground flex flex-col items-center justify-center gap-2">
          <p>There is no data to display yet.</p>
          <p>Start by creating a expense category goal.</p>
        </div>
      )}
    </div>
  );
}
