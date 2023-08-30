import React from "react";
import Box from "@mui/material/Box";
import Header4 from "../components/Typography/Headers/Header4";
import Avatar from "@mui/material/Avatar";
import Hetti from "../assets/Hetti.png";
import Header6 from "./Typography/Headers/Header6";
import Subtitle1 from "./Typography/Subtitles/Subtitle1";
import { Divider } from "@mui/material";

interface TopBar {
	title: string;
}

const TopBar: React.FC<TopBar> = ({ title }) => {
	return (
		<>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					padding: 2,
				}}
			>
				{/* page title */}
				<Box
					sx={{
						display: "flex",
					}}
				>
					<Header4 text={title} />
				</Box>

				{/* profile */}
				<Box
					sx={{
						display: "flex",
						columnGap: 2,
						alignItems: "center",
						flexDirection: "row",
					}}
				>
					{/* avatar */}
					<Box>
						<Avatar alt="Hetti" src={Hetti} />
					</Box>

					{/* info */}
					<Box>
						<Header6 text="OOP Lecturer"></Header6>
						<Subtitle1 text="opplecturer@sliit.lk"></Subtitle1>
					</Box>
				</Box>
			</Box>
			<Divider />
		</>
	);
};

export default TopBar;
