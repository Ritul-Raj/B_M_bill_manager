


import { useEffect, useState } from "react";
import "./Graph.css";
import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const monthLabels = [
  "January",
  "February",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function Graph({ onCloseChart }) {
  const seedData = useSelector((state) => state.seedData);
  const [chartData, setChartData] = useState([]);

  const calculateTotal = (entries) => {
    return entries.reduce((sum, item) => sum + item.amount, 0);
  };

  const generateChartData = () => {
    console.log(seedData, "seedData");

    const updatedChartData = Object.keys(seedData)?.map((key, index) => ({
      month: monthLabels[index],
      total: calculateTotal(seedData[key]),
    }));

    setChartData(updatedChartData);
  };

  useEffect(() => {
    generateChartData();
  }, [seedData]);

  console.log(chartData);

  return (
    <div className="chart-container">
      <div className="close-button" onClick={onCloseChart}>
        <h1>X</h1>
      </div>
      <LineChart
        width={600}
        height={300}
        data={chartData}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="total" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
}

export default Graph;
