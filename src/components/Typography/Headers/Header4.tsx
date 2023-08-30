import { Typography } from "@mui/material";
import Header from "./HeaderInterface";

const Header4: React.FC<Header> = ({ text, gutterBottom = false }) => {
	return (
		<Typography variant="h4" gutterBottom={gutterBottom}>
			{text}
		</Typography>
	);
};

export default Header4;
