import { Typography } from "@mui/material";
import Header from "./HeaderInterface";

const Header2: React.FC<Header> = ({ text, gutterBottom = false }) => {
	return (
		<Typography variant="h2" gutterBottom={gutterBottom}>
			{text}
		</Typography>
	);
};

export default Header2;
