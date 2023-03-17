import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  launched: number,
  scheduled: number,
  pending: number,
) {
  return { name, launched, scheduled, pending};
}

const rows = [
  createData('Email Campaign', 1, 0, 1),
  createData('Social Posts', 4, 0, 0),
  createData('Events', 1, 0, 0),
  createData('Webinars', 9, 0, 0),
  createData('SMS Campaign', 1, 0, 1),
  createData('Blogs', 0, 0, 1),
  createData('Video', 0, 0, 1),
  createData('Newspaper ads', 0, 0, 1),
  createData('Polls', 1, 0, 0),
];

export default function Activities() {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: 500 }}>
      <Table sx={{ maxWidth: 500}} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontSize:17}}><strong>Activities</strong></TableCell>
            <TableCell align="center"><strong>Launched</strong></TableCell>
            <TableCell align="center"><strong>Scheduled</strong></TableCell>
            <TableCell align="center"><strong>Pending</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center"><strong>{row.launched}</strong></TableCell>
              <TableCell align="center">{row.scheduled}</TableCell>
              <TableCell align="center">{row.pending}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}