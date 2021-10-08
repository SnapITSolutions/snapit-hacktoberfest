import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, github) {
  return { name, github };
}

const rows = [
  createData("Cami Taylor", "github.com/camitaylor"),
  createData("Steve Simmons", "github.com/stevesimmons"),
  createData("Aaron Shivers", "github.com/aaronshivers"),
  createData("Becca Simmons", "github.com/beccasimmons"),
  createData("Lis Phelps", "github.com/lisphelps"),
];

const ContributorTable = () => (
  <TableContainer component={Paper} sx={{ width: 700 }}>
    <Table
      sx={{
        width: 700,
        backgroundColor: "primary.main",
      }}
      aria-label="simple table"
    >
      <TableHead>
        <TableRow>
          <TableCell
            sx={{
              color: "text.secondary",
              fontSize: 20,
              fontWeight: "bold",
              pl: 10,
              backgroundColor: "secondary.dimgray",
            }}
          >
            Name
          </TableCell>
          <TableCell
            align="left"
            sx={{
              color: "text.secondary",
              fontSize: 20,
              fontWeight: "bold",
              pl: 15,
              backgroundColor: "secondary.dimgray",
            }}
          >
            Github
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell
              component="th"
              scope="row"
              sx={{ color: "text.secondary", pl: 10 }}
            >
              {row.name}
            </TableCell>
            <TableCell align="left" sx={{ color: "text.secondary", pl: 15 }}>
              {row.github}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default ContributorTable;
