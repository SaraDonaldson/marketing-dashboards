'use client'
import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Dataset {
  label: string;
  data: number[];
  backgroundColor: string;
}

const BarChart: React.FC = () => {
  const [data, setData] = useState({
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Impressions",
        data: [],
        backgroundColor: "rgba(255, 206, 86, 1)",
      },
      {
        label: "Clicks",
        data: [],
        backgroundColor: "rgba(54, 162, 235, 1)",
      },
      {
        label: "Conversions",
        data: [],
        backgroundColor: "rgba(75, 192, 192, 1)",
      },
    ],
  });

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const
      },
      title: {
        display: true,
        text: "Advertising Statistics",
      },
    },
  };

  const updateData = () => {
    setData((currentData:any) => {
      const newData: Dataset[] = currentData.datasets.map((dataset:any) => ({
        ...dataset,
        data: currentData.labels.map(() => Math.floor(Math.random() * 1000)),
      }));
      return {
        ...currentData,
        datasets: newData,
      };
    });
  };

  useEffect(() => {
    const intervalId = setInterval(updateData, 10000); // Update every 10 seconds
      updateData()
    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  return <Bar options={options} data={data} />;
};

export default BarChart;