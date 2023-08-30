import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

interface CardParent {
	children: React.ReactNode;
}

const CardParent: React.FC<CardParent> = ({children}) => {
	return (
		<Card
			sx={{
				display: "inline-block",
				padding: " 5px 0 10px 0",
				width: "auto",
				height: "auto"
			}}
		>
			<CardContent>
                {children}
			</CardContent>
		</Card>
	);
};

export default CardParent;
