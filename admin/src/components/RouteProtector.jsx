import { Navigate, Outlet } from 'react-router-dom';
import {useAuth} from '../context/authContext';

export const ProtectorRuta=  () => {
  const { autenticado, isLoading } = useAuth();
  if (isLoading) return <div>Cargando...</div>;
  console.log(autenticado)
  if (!autenticado && !isLoading) return <Navigate to="/login" replace />;
  return <Outlet />;
};
