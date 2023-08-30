import Subtitle1 from "../Typography/Subtitles/Subtitle1";
import Subtitle2 from "../Typography/Subtitles/Subtitle2";
import Header6 from "../Typography/Headers/Header6";
import Box from "@mui/material/Box";

import CardParent from "./CardParent";

interface FractionDataCard {
	title: string;
	numerator: string;
	denominator: string;
}

const FractionDataCard: React.FC<FractionDataCard> = ({
	title,
	numerator,
	denominator,
}) => {
	return (
		<CardParent>
			<Subtitle1 text={title} gutterBottom={true} />
			<Box
				sx={{
					display: "flex",
					alignItems: "baseline",
				}}
			>
				<Header6 text={numerator} />
				<span>/</span>
				<Subtitle2 text={denominator} />
			</Box>
		</CardParent>
	);
};

export default FractionDataCard;
