import { Box } from "@mui/material"
import Dashboard from "../../components/adminView/Dashboard"
import { Outlet } from "react-router"

const AdminPage = () => {
  return (
    <Box display={'flex'} width={'100vw'}>
      <Dashboard />

      <Outlet />
    </Box>

export default AdminPage;
