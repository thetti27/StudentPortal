import { Typography } from "@mui/material";
import Body from "./BodyInterface";

const Body1: React.FC<Body> = ({ text }) => {
	return <Typography variant="body1">{text}</Typography>;
};

export default Body1;
