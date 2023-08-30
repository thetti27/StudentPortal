import { ResponsiveLine } from "@nivo/line";
import React from "react";

/*
		DESCRIPTION
Linear Scale 
*/

interface DataPoint {
	x: number | string | Date;
	y: number | string | Date;
}

interface DataItem {
	id: string;
	color?: string;
	data: DataPoint[];
}

export interface LineChartProps {
	data: DataItem[];
}

const LineChartType1: React.FC<LineChartProps> = ({ data }) => {
	return (
		<ResponsiveLine
			curve="monotoneX"
			data={data}
			xScale={{ type: "point" }}
			yScale={{
				type: "linear",
			}}
			enableGridX={false}
			enableGridY={false}
			enablePoints={false}
			margin={{
					top: 10
				}
			}
			enableArea
		/>
	);
};

export default LineChartType1;
