import SideBar from "./pages/global/SideBar";
import Reports from "./pages/Reports";
import Students from "./pages/Students";
import { Routes, Route } from "react-router-dom";

import Grid from "@mui/material/Grid";

function App() {
	return (
		<div className="app">
			<Grid container spacing={2}>
				<Grid item xs={3}>
					<SideBar />
				</Grid>
				<Grid item xs={9}>
					<div className="content">
						<Routes>
							<Route path="/" element={<Reports />} />
							<Route path="/students" element={<Students />} />
						</Routes>
					</div>
				</Grid>
			</Grid>
		</div>
	);
}

export default App;
