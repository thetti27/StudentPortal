import { Typography } from "@mui/material";
import Header from "./HeaderInterface";

const Header3: React.FC<Header> = ({ text, gutterBottom = false }) => {
	return (
		<Typography variant="h3" gutterBottom={gutterBottom}>
			{text}
		</Typography>
	);
};

export default Header3;
