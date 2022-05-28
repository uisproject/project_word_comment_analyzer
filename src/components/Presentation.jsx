import React, { useState } from "react";
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
import { useSelector } from "react-redux";

const Presentation = () => {
  const commentsData = useSelector(({ comments }) => comments);
  const [data, setData] = useState(() => {
    const combinedData = commentsData.data
      .concat(commentsData.adminComments)
      .reverse()
      .map((item) => {
        return { size: item.body.length, name: item.name };
      })
      .slice(0, 10)
      .reverse();

    return combinedData;
  });

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  ChartJS.defaults.color = "#fff";

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
      },
    },
  };

  const dataset = {
    labels: data.map((item, idx) => idx + 1),
    datasets: [
      {
        label: "Word Size",
        data: data.map((item) => item.size),
        backgroundColor: "#fff",
      },
    ],
  };

  return <Bar options={options} data={dataset} />;
};

export default Presentation;
