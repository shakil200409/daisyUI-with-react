import { LineChart as LChart, Line, XAxis, YAxis, Tooltip } from "recharts";
const LineChart = () => {
  const students = [
    { name: "Alice", math: 85, physics: 78, chemistry: 92 },
    { name: "Bob", math: 72, physics: 81, chemistry: 76 },
    { name: "Charlie", math: 90, physics: 88, chemistry: 85 },
    { name: "Diana", math: 68, physics: 74, chemistry: 80 },
    { name: "Ethan", math: 95, physics: 92, chemistry: 89 },
  ];

  return (
    <div className="mt-10">
      <LChart width={800} height={500} data={students}>
        <Line stroke="red" dataKey={"math"}></Line>
        <Line stroke="blue" dataKey={"physics"}></Line>
        <Line stroke="green" dataKey={"chemistry"}></Line>
        <XAxis dataKey={"name"} />
        <YAxis />
        <Tooltip />
      </LChart>
    </div>
  );
};

export default LineChart;
