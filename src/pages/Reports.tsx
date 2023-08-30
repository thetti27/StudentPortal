import { Box } from "@mui/material";
import TopBar from "../components/TopBar";
import LineChartDataCard from "../components/DataCards/LineChartDataCard";
import BarChartDataCard from "../components/DataCards/BarChartDataCard";
import StudentLeaderboard from "../components/StudentLeaderboard/StudentLeaderboard";

const data = [
	{
		id: "fake corp. A",
		data: [
			{
				x: 0,
				y: 7,
			},
			{
				x: 1,
				y: 5,
			},
			{
				x: 2,
				y: 11,
			},
			{
				x: 3,
				y: 9,
			},
			{
				x: 4,
				y: 13,
			},
			{
				x: 7,
				y: 16,
			},
			{
				x: 9,
				y: 12,
			},
		],
	},
];

const dataBar = [
	{
		topic: "Polymorphism",
		correct: 100,
	},
	{
		topic: "Encapsulation",
		correct: 200,
	},
	{
		topic: "OOP",
		correct: 300,
	},
];

const Reports = () => {
	return (
		<Box>
			<TopBar title="Reports" />
			<LineChartDataCard title="Course average" scalar="54%" data={data} />
			<BarChartDataCard
				data={dataBar}
				title="Weakest topics"
				keys={["correct"]}
				layout="horizontal"
				indexBy="topic"
			/>

			<StudentLeaderboard />
		</Box>
	);
};

export default Reports;
