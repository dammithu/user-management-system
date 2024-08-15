import {
  Button,
  Grid,
  Input,
  Typography,
  Paper,
  InputAdornment,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import BadgeIcon from "@mui/icons-material/Badge";
import { useEffect, useState } from "react";

const UserForm = ({ addUser, updateUser, submited, data, isEdit }) => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    if (!submited) {
      setId(0);
      setName("");
    }
  }, [submited]);

  useEffect(() => {
    if ((data?.id, data.id !== 0)) {
      setId(data.id);
      setName(data.name);
    }
  }, [data]);

  return (
    <Paper
      elevation={4}
      sx={{ padding: "30px", borderRadius: "12px", backgroundColor: "#f1f8e9" }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{
          color: "#388e3c",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        User Form
      </Typography>
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Typography
            component="label"
            htmlFor="id"
            sx={{
              color: "#616161",
              marginRight: "20px",
              fontSize: "16px",
              width: "80px",
            }}
          >
            ID
          </Typography>
          <Input
            type="number"
            id="id"
            name="id"
            fullWidth
            startAdornment={
              <InputAdornment position="start">
                <BadgeIcon sx={{ color: "#388e3c" }} />
              </InputAdornment>
            }
            sx={{
              padding: "10px",
              border: "1px solid #cfd8dc",
              borderRadius: "8px",
              width: "300px",
              backgroundColor: "#ffffff",
              boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
              "&:focus-within": {
                borderColor: "#388e3c",
              },
            }}
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Typography
            component="label"
            htmlFor="name"
            sx={{
              color: "#616161",
              marginRight: "20px",
              fontSize: "16px",
              width: "80px",
            }}
          >
            Name
          </Typography>
          <Input
            type="text"
            id="name"
            name="name"
            fullWidth
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle sx={{ color: "#388e3c" }} />
              </InputAdornment>
            }
            sx={{
              padding: "10px",
              border: "1px solid #cfd8dc",
              borderRadius: "8px",
              width: "300px",
              backgroundColor: "#ffffff",
              boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
              "&:focus-within": {
                borderColor: "#388e3c",
              },
            }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            onClick={() =>
              isEdit ? updateUser({ id, name }) : addUser({ id, name })
            }
            sx={{
              display: "block",
              margin: "30px auto 0",
              padding: "12px 24px",
              backgroundColor: "#00796b",
              color: "white",
              fontWeight: "bold",
              fontSize: "1rem",
              borderRadius: "8px",
              "&:hover": { backgroundColor: "#004d40" },
            }}
          >
            {isEdit ? "UPDATE" : "ADD"}
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default UserForm;
