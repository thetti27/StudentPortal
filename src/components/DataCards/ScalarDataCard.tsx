import Subtitle1 from "../Typography/Subtitles/Subtitle1";
import Header6 from "../Typography/Headers/Header6";
import Box from "@mui/material/Box";

import CardParent from "./CardParent";

interface ScalarDataCard {
	title: string;
	data: string

}

const ScalarDataCard: React.FC<ScalarDataCard> = ({
	title,
    data,
}) => {
	return (
		<CardParent>
			<Subtitle1 text={title} gutterBottom={true} />
			<Box>
                <Header6 text={data} />
			</Box>
		</CardParent>
	);
};

export default ScalarDataCard;
