import React, { Fragment } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, createTheme } from "@mui/system";

const sample =
  {total: 27, open: 7, inProgress: 8, inHold: 5};

export default function PendingTasks() {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: 500 }}>
      <Table sx={{ maxWidth: 500}} aria-label="simple table">
      <TableHead>
          <TableRow>
            <TableCell colSpan={2} sx={{fontSize:17}}><strong>Pending Tasks</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <Fragment>
              <TableRow>
                <TableCell rowSpan={4} align="center" width="50%" sx={{borderRight: 1, borderColor: 'grey.300'}}>
                  <Box component="span" sx={{color:'#fd9d17', fontSize:40, fontWeight:600}}>
                    {sample.inHold + sample.inProgress + sample.open}
                  </Box>
                  <br/>
                  out of <strong>{sample.total}</strong>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{borderBottom: 0}}>
                  <Box component="span" sx={{color:'#c9555e', fontSize:20, fontWeight:600}}>
                    {sample.open}&nbsp;
                  </Box>
                  Open
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{borderBottom: 0}}>
                  <Box component="span" sx={{color:'#988d81', fontSize:20, fontWeight:600}}>
                    {sample.inProgress}&nbsp;
                  </Box> 
                  In progress
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Box component="span" sx={{color:'#67a8e1', fontSize:20, fontWeight:600}}>
                  {sample.inHold}&nbsp;
                  </Box> 
                  On hold
                </TableCell>
              </TableRow>
            </Fragment>
        </TableBody>
      </Table>
    </TableContainer>
  );
}