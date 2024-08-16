import { AppBar, Toolbar, Button } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/home">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/chat">
            Chat
          </Button>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
}
