import { Avatar, Box } from "@mui/material";

import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";


import React from "react";
import Header6 from "../Typography/Headers/Header6";
import Subtitle2 from "../Typography/Subtitles/Subtitle2";
import Header5 from "../Typography/Headers/Header5";

interface RowItemProps {
	name: string;
	points: number;
	percentage: number;
	avatar: string;
	rank: number;
	position: "promote" | "demote" | "flat";
}

const RowItem: React.FC<RowItemProps> = ({
	name,
	points,
	percentage,
	avatar,
	rank,
	position,
}) => {
	return (
		<Box sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: "20px"
        }}>
			{/* left: avatar, avatar, name, point, percentage */}
			<Box sx={{
                display: "flex",
                alignItems: "center",
                columnGap: "10px"
            }}>
				{/* left: avatar */}
				<Box>
					<Avatar alt="student image" src={avatar} />
				</Box>

				{/* right: info */}
				<Box>
					<Box>
						<Header6 text={name} />
					</Box>
					<Box>
						<Subtitle2 text={`${points} points - ${percentage}% correct`} />
					</Box>
				</Box>
			</Box>

			{/* ranking */}
			<Box sx={{
                display: "flex",
                alignItems: "center"
            }}>
				{/* rank */}
				<Box>
					<Header5 text={rank} />
				</Box>
				{/* icon */}
				<Box>
					{position === "promote" && <ArrowUpwardIcon sx={{
                        color: "#0f0"
                    }} />}

					{position === "demote" && <ArrowDownwardIcon sx={{
                        color: "#f00"
                    }} />}

					{position === "flat" && <HorizontalRuleIcon sx={{
                        color: "#808080"
                    }} />}
				</Box>
			</Box>
		</Box>
	);
};

export default RowItem;
