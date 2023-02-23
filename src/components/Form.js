import { useSelector } from 'react-redux';
import '../index.css'
import * as React from 'react';
import CreadorIcon from '@mui/icons-material/AccountCircle';
import DescripcionIcon from '@mui/icons-material/Description';
import EntidadIcon from '@mui/icons-material/Warehouse';
import EntregableIcon from '@mui/icons-material/SendTimeExtension';
import FechaIcon from '@mui/icons-material/CalendarMonth';
import IdVariableIcon from '@mui/icons-material/Grid3x3';
import NombreAltIcon from '@mui/icons-material/TextFields';
import TipodatosIcon from '@mui/icons-material/DataObject';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
//import TableCell from '@mui/material/TableCell';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export function Form() {
  const variable1 = useSelector(state => state.query.variable1);
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  

  return (
      <div>
        <TableContainer component={Paper}>
          <Table sx={{mixWidth: 650, width: 500 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTableCell><CreadorIcon /> Creador</StyledTableCell>
                <StyledTableCell component="th" scope="row">{variable1}</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell><DescripcionIcon /> Descripcion de Variable</StyledTableCell>
                <StyledTableCell component="th" scope="row">{variable1}</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell><EntidadIcon /> Entidad</StyledTableCell>
                <StyledTableCell component="th" scope="row">{variable1}</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell><EntregableIcon /> Entregable</StyledTableCell>
                <StyledTableCell component="th" scope="row">{variable1}</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell><FechaIcon /> Fecha de Modificacion</StyledTableCell>
                <StyledTableCell component="th" scope="row">{variable1}</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell><IdVariableIcon /> Id Variable</StyledTableCell>
                <StyledTableCell component="th" scope="row">{variable1}</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell><NombreAltIcon /> Nombre Alternativo</StyledTableCell>
                <StyledTableCell component="th" scope="row">{variable1}</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell><TipodatosIcon /> Tipo Datos</StyledTableCell>
                <StyledTableCell component="th" scope="row">{variable1}</StyledTableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </div>
  )
}
