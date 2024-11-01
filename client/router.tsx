/* eslint-disable react/jsx-key */
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from './components/App';
import Register from './pages/Register';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="register" element={<Register />} />
    </Route>
  )
);

export default router;
