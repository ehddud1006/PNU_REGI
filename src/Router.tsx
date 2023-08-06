import Login from '@/@page/Login';
import MainPage from '@/@page/Main';
import Register from '@/@page/Register';
import { Route, Routes } from 'react-router-dom';

export const PATH = {
  MAIN: '/',
  REGISTER: '/register',
};

const Router = () => {
  return (
    <Routes>
      <Route path={PATH.MAIN} element={<MainPage />} />
      <Route path={PATH.REGISTER} element={<Register />} />
    </Routes>
  );
};

export default Router;
