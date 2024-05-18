"use client";

import { transactionCategories } from "@/data/transaction-categories";
import "./../styles.css";
import React from "react";

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar
} from "recharts";

interface categoriesGoals {
  id: number;
  category_id: number;
  user_id: number;
  target_value: number;
  created_at: string;
  updated_at: string;
}

interface categoriesExpenses {
  category_id: number;
  value: number;
}

export default function ExpensesChart({
  categoriesGoals,
  categoriesExpenses
}: {
  categoriesGoals: categoriesGoals[];
  categoriesExpenses: categoriesExpenses[];
}) {
  const barChartData = categoriesGoals.map((goal) => {
    const categoryExpense = categoriesExpenses.find(
      (category) => category.category_id === goal.category_id
    );
    const category = transactionCategories.find(
      (category) => category.id === goal.category_id
    );

    return {
      name: category?.name,
      target: goal.target_value,
      real: categoryExpense?.value || 0
    };
  });

  return (
    <div className="col-span-4 flex w-full items-center justify-center rounded-md border bg-white p-4 shadow-md">
      <BarChart width={1400} height={380} data={barChartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="target" fill="#8884d8" />
        <Bar dataKey="real" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}
