import { Typography } from "@mui/material";
import Subtitle from "./SubtitleInterface";

const Subtitle2: React.FC<Subtitle> = ({ text }) => {
	return (
		<Typography variant="subtitle2">
			{text}
		</Typography>
	);
};

export default Subtitle2;
