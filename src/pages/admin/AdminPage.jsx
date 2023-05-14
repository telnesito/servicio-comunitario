import { Box } from "@mui/material";
import Dashboard from "../../components/adminView/Dashboard";
import { Outlet } from "react-router";
import { createEvent } from "../../api/eventManage";

const AdminPage = () => {
	createEvent({
		title: "Carvanal",
		img: "/src/assets/images/carnaval.png",
		date: "Febrero 19, 2023",
	});

	return (
		<Box display={"flex"} width={"100vw"}>
			<Dashboard />

			<Outlet />
		</Box>
	);
};

export default AdminPage;
