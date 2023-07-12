import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'

const TableWorkers = ({ workers }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell ><b>Nombres  </b></TableCell>
            <TableCell><b>Apellidos</b></TableCell>

            <TableCell><b>Cargo</b></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {workers.map(
            ({ nombres, apellidos, cargo, img }, index) => (
              <TableRow key={index}>

                <TableCell width={"30%"}>
                  <Typography color={"black"}>
                    {nombres}
                  </Typography>
                </TableCell>

                <TableCell width={"30%"}>
                  <Typography color={"black"}>
                    {apellidos}
                  </Typography>
                </TableCell>

                <TableCell width={"30%"}>
                  <Typography color={"black"}>
                    {cargo}
                  </Typography>
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableWorkers