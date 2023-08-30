import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import Subtitle1 from "../../components/Typography/Subtitles/Subtitle1";
import SLIIT from "../../assets/SLIIT.jpeg";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import AssessmentRoundedIcon from "@mui/icons-material/AssessmentRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";

interface Item {
	title: string;
	to: string;
	icon: React.ReactNode;
	selected: string;
	setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const Item: React.FC<Item> = ({ title, to, icon, selected, setSelected }) => {
	return (
		<MenuItem
			active={selected === title}
			onClick={() => setSelected(title)}
			icon={icon}
			component={<Link to={to} />}
		>
			<Subtitle1 text={title} />
		</MenuItem>
	);
};

const SideBar = () => {
	const [selected, setSelected] = useState("Reports");

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				rowGap: "10px",
			}}
		>
			{/* image */}
			<Card>
				<CardContent>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
						}}
					>
						<img
							style={{
								width: "30%",
							}}
							src={SLIIT}
							alt="SLITT logo"
						/>
					</Box>
				</CardContent>
			</Card>

			{/* navigation */}
			<Card>
				<CardContent>
					<Box
						sx={{
							"& .sidebar": {
								border: "none",
							},
							"& .menu-icon": {
								backgroundColor: "transparent !important",
							},
							"& .menu-anchor": {
								color: "inherit !important",
								backgroundColor: "transparent !important",
							},
							"& .menu-item": {
								padding: "5px 35px 5px 20px !important",
								backgroundColor: "transparent !important",
							},
							"& .menu-item:hover": {
								color: "#f00 !important",
								backgroundColor: "transparent !important",
							},
							"& .menu-item.active": {
								color: "#6870fa !important",
								backgroundColor: "transparent !important",
							},
						}}
					>
						<Sidebar
							style={{
								background: "none",
								borderRight: 0,
							}}
						>
							<Menu>
								<Item
									title="Reports"
									to="/"
									icon={<AssessmentRoundedIcon />}
									selected={selected}
									setSelected={setSelected}
								/>
								<Item
									title="Students"
									to="/students"
									icon={<SchoolRoundedIcon />}
									selected={selected}
									setSelected={setSelected}
								/>
							</Menu>
						</Sidebar>
					</Box>
				</CardContent>
			</Card>
		</Box>
	);
};

export default SideBar;
