import { Typography } from "@mui/material";
import Subtitle from "./SubtitleInterface";

const Subtitle1: React.FC<Subtitle> = ({ text, gutterBottom = false }) => {
	return <Typography variant="subtitle1" gutterBottom={gutterBottom}>{text}</Typography>;
};

export default Subtitle1;
