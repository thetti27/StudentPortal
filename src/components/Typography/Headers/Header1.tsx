import { Typography } from "@mui/material";
import Header from "./HeaderInterface";

const Header1: React.FC<Header> = ({ text, gutterBottom=false }) => {
	return (
		<Typography variant="h1" gutterBottom={gutterBottom}>
			{text}
		</Typography>
	);
};

export default Header1;
