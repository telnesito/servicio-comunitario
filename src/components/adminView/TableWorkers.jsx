import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useState } from 'react'
import { deleteWorker } from '../../api/organigramaManage'
import ConfirmAction from '../ConfirmAction'
import useModal from '../../hooks/useModal'
import DeleteWorker from './DeleteWorker'
const TableWorkers = ({ workers, especilidad }) => {

  const { closeModal, open, openModal } = useModal()
  const { closeModal: closeUpdate, open: stateUpdate, openModal: openUpdate } = useModal()

  const [idToDelete, setIdToDelete] = useState("")
  const [userToUpdate, setUserToUpdate] = useState({})
  // await deleteArticle(idToDelete, 'noticias')




  // export const deleteWorker = async (workerId, especilidad) => {
  //   await deleteDoc(doc(db, "worker", especilidad, workerId))
  // }
  const handleDelete = async () => {
    try {
      await deleteWorker(idToDelete, especilidad)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell ><b>Nombres  </b></TableCell>
            <TableCell><b>Apellidos</b></TableCell>

            <TableCell><b>Cargo</b></TableCell>
            <TableCell><b>Accion</b></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {workers.map(
            ({ nombres, apellidos, cargo, img, id }, index) => (
              <TableRow key={index}>

                <TableCell width={"20%"}>
                  <Typography color={"black"}>
                    {nombres}
                  </Typography>
                </TableCell>

                <TableCell width={"20%"}>
                  <Typography color={"black"}>
                    {apellidos}
                  </Typography>
                </TableCell>

                <TableCell width={"30%"}>
                  <Typography color={"black"}>
                    {cargo}
                  </Typography>
                </TableCell>
                <TableCell width={"15%"}>

                  <Box
                    display={'flex'}
                    gap={'10px'}
                  >
                    <Button
                      size="small"
                      onClick={() => {

                        setIdToDelete(id)
                        openModal()
                      }}
                      variant='contained'
                      color='error'
                    >
                      Eliminar
                    </Button>

                    <Button
                      size="small"
                      onClick={() => {

                        setUserToUpdate({
                          nombres, apellidos, cargo, img, id, especilidad
                        })
                        openUpdate()
                      }}
                      variant='outlined'
                    >
                      Actualizar
                    </Button>
                  </Box>
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
      <DeleteWorker isOpen={stateUpdate} onClose={closeUpdate} user={userToUpdate} />
      <ConfirmAction onClose={closeModal} target={'Worker'} open={open} action={handleDelete} />
    </TableContainer>
  )
}

export default TableWorkers