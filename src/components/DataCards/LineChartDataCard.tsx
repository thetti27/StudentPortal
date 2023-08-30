import React from "react";

import Subtitle1 from "../Typography/Subtitles/Subtitle1";
import Header6 from "../Typography/Headers/Header6";
import Box from "@mui/material/Box";

import CardParent from "./CardParent";

import LineChartType1, {
	type LineChartProps,
} from "../Charts/Line/LineChartType1";

interface LineChartDataCard extends LineChartProps {
	title: string;
	scalar: string;
}

const LineChartDataCard: React.FC<LineChartDataCard> = ({
	title,
	scalar,
	data,
}) => {
	return (
		<CardParent>
			<Subtitle1 text={title} gutterBottom={true} />
			<Box>
				<Header6 text={scalar} />
				<Box
					sx={{
						width: "200px",
						height: "100px",
					}}
				>
					<LineChartType1 data={data} />
				</Box>
			</Box>
		</CardParent>
	);
};

export default LineChartDataCard;
