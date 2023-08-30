import React from "react";

import Subtitle1 from "../Typography/Subtitles/Subtitle1";
import Box from "@mui/material/Box";

import CardParent from "./CardParent";

import BarChart, { type BarChartProps } from "../Charts/Bar/BarChart";

interface BarChartDataCard extends BarChartProps {
	title: string;
}

const BarChartDataCard: React.FC<BarChartDataCard> = ({
	title,
	data,
    keys,
    layout,
    indexBy,
}) => {
	return (
		<CardParent>
			<Subtitle1 text={title} gutterBottom={true} />
			<Box>

				<Box
					sx={{
						width: "200px",
						height: "100px",
					}}
				>
					<BarChart data={data} keys={keys} layout={layout} indexBy={indexBy}/>
				</Box>
			</Box>
		</CardParent>
	);
};

export default BarChartDataCard;
