import { Box } from "@mui/material"
import Dashboard from "../../components/adminView/Dashboard"
import { Outlet } from "react-router"
import { ContextLoginProvider } from "../../hooks/ContextLoginProvider"
const AdminPage = () => {
  return (

    <Box display={'flex'} width={'100vw'}>
      <ContextLoginProvider>
        <Dashboard />

        <Outlet />
      </ContextLoginProvider>
    </Box>

  )
}

export default AdminPage