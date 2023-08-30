import React from 'react'
import { ResponsiveBar, type BarDatum } from '@nivo/bar';

export interface BarChartProps {
	keys: string[];
	data: BarDatum[];
	layout: "horizontal" | "vertical";
  indexBy: string;
}

const BarChart: React.FC<BarChartProps> = ({keys, data, layout, indexBy}) => {
  return (
		<ResponsiveBar
			data={data}
			keys={keys}
			layout={layout}
			indexBy={indexBy}
			enableGridX={false}
			enableGridY={false}
			borderRadius={10}
		/>
	);
}

export default BarChart
