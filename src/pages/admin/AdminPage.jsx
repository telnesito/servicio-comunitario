import { Box } from "@mui/material";
import Dashboard from "../../components/adminView/Dashboard";
import { Outlet } from "react-router";

const AdminPage = () => {
	return (
		<Box display={"flex"} flexDirection={'row'} height={'100vh'} width={"100vw"} boxSizing={'border-box'}>
			<Dashboard />


			<Outlet />
		</Box>
	);
};
export default AdminPage;
