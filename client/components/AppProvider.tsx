import { ReactNode } from 'react';
import { AuthProvider } from './AuthContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';

const queryClient = new QueryClient();

export const AppProvider = ({ children }: { children: ReactNode}) => {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </QueryClientProvider>
    </AuthProvider>
  );
};
