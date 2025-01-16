import { BarChart, Bar, Legend, XAxis, YAxis } from "recharts";
const StatWithBar = () => {
  const cricketMatchData = [
    { over: "Over 1", team1Runs: 12, team2Runs: 10, highestRun: 12 },
    { over: "Over 2", team1Runs: 8, team2Runs: 12, highestRun: 12 },
    { over: "Over 3", team1Runs: 15, team2Runs: 8, highestRun: 15 },
    { over: "Over 4", team1Runs: 10, team2Runs: 18, highestRun: 18 },
    { over: "Over 5", team1Runs: 20, team2Runs: 25, highestRun: 25 },
  ];

  return (
    <div>
      <BarChart width={900} height={500} data={cricketMatchData}>
        <XAxis dataKey="over" />
        <YAxis dataKey={"highestRun"} />
        <Legend />
        <Bar dataKey="team1Runs" fill="green" />
        <Bar dataKey="team2Runs" fill="white" />
      </BarChart>
    </div>
  );
};

export default StatWithBar;
