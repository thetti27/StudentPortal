import Subtitle1 from "../Typography/Subtitles/Subtitle1";
import Header6 from "../Typography/Headers/Header6";
import { isUndefined } from "lodash";

import CardParent from "./CardParent";
import Grid from "@mui/material/Grid";

interface TimeDataCard {
	title: string;
	hour?: string;
	minute?: string;
	second?: string;
}

interface Time {
	time: string;
	label: "h" | "m" | "s";
}
const Time: React.FC<Time> = ({ time, label }) => {
	return (
		<Grid
			item
			sx={{
				flexGrow: "1",
			}}
		>
			<Header6 text={`${time}${label}`} />
		</Grid>
	);
};

const TimeDataCard: React.FC<TimeDataCard> = ({ title, hour, minute, second }) => {
	return (
		<CardParent>
			<Subtitle1 text={title} gutterBottom={true} />

			<Grid container>
				{!isUndefined(hour) && <Time time={hour} label="h" />}

				{!isUndefined(minute) && <Time time={minute} label="m" />}

				{!isUndefined(second) && <Time time={second} label="s" />}
			</Grid>
		</CardParent>
	);
};

export default TimeDataCard;
