import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Tooltip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";

function UsersTable({ rows, selectUser, deleteUser }) {
  // console.log("Rows passed to UsersTable:", rows);

  return (
    <TableContainer
      component={Paper}
      sx={{ boxShadow: 4, borderRadius: "12px" }}
    >
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "#004d40" }}>
            <TableCell
              sx={{ fontWeight: "bold", color: "#ffffff", fontSize: "1.1rem" }}
            >
              ID
            </TableCell>
            <TableCell
              sx={{ fontWeight: "bold", color: "#ffffff", fontSize: "1.1rem" }}
            >
              Name
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "bold",
                color: "#ffffff",
                fontSize: "1.1rem",
                textAlign: "center",
              }}
            >
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length > 0 ? (
            rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  "&:hover": { backgroundColor: "#e0f2f1" },
                }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  <Tooltip title="Update">
                    <IconButton
                      sx={{
                        color: "#0288d1",
                        "&:hover": { backgroundColor: "#b3e5fc" },
                      }}
                      onClick={() => selectUser({ id: row.id, name: row.name })}
                    >
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton
                      sx={{
                        color: "#d32f2f",
                        "&:hover": { backgroundColor: "#ffcdd2" },
                      }}
                      onClick={() => deleteUser({ id: row.id })}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                component="th"
                scope="row"
                colSpan={3}
                sx={{
                  textAlign: "center",
                  fontStyle: "italic",
                  color: "#757575",
                }}
              >
                No Data
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UsersTable;
