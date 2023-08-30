import { Typography } from "@mui/material";
import Body from "./BodyInterface";

const Body2: React.FC<Body> = ({ text }) => {
	return <Typography variant="body2">{text}</Typography>;
};

export default Body2;
