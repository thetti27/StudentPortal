import { Typography } from "@mui/material";
import Header from "./HeaderInterface";

const Header6: React.FC<Header> = ({ text, gutterBottom = false }) => {
	return (
		<Typography variant="h6" gutterBottom={gutterBottom}>
			{text}
		</Typography>
	);
};

export default Header6;
