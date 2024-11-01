import { Button, Stack, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useState } from "react";
import { useAuth } from "./AuthContext";

export default function NavBar() {
  const { isAuthenticated, login, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLogin = () => {
    // Ideally, you'd validate and authenticate here.
    login("dummyToken"); // Replace with real login logic
    handleClose();
  };

  const handleLogout = () => logout();

  const handleClick = () => {
    if (isAuthenticated) {
      handleLogout();
    } else {
      handleOpen();
    }
  };

  return (
    <Stack direction="row" spacing={2}
      sx={{
        p: 1,
        color: 'text.primary',
        backgroundColor: 'background.default',
        justifyContent: 'flex-end',
      }}
    >
      <Button
        sx={{ color: 'text.secondary' }}
        onClick={handleClick}
      >
        {isAuthenticated ? 'Logout' : 'Login'}
      </Button>

      {/* Login Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Username"
            type="text"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleLogin} color="primary">Login</Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}
