import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { AppProvider } from './AppProvider';
import { Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

function App() {
  return (
    <AppProvider>
      <Stack
        sx={{
          backgroundColor: 'background.default',
          height: '100vh',
        }}
      >
        <NavBar />
        <Outlet />
      </Stack>
    </AppProvider>
  )
}

export default App
