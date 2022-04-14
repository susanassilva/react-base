import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  ErrorPage, HomePage, LoginPage, RegisterPage, LobbyPage, UsersPage, ProfilePage,
} from '../../pages/index.page';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/lobby" element={<LobbyPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/profile/:userId" element={<ProfilePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/users" element={<UsersPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
