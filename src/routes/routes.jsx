import { createBrowserRouter } from "react-router-dom";
import Inicio from "../pages/inicio/Inicio";
import Login from "../pages/login/Login";
import PageProyecto from "../pages/proyecto/ProyectoPedagogico";
import PageHistoria from "../pages/historia/pageHistoria";
import PageOrganigrama from "../pages/organigrama/PageOrganigrama";
import PageGaleria from "../pages/galeria/PageGaleria";

export const Router = createBrowserRouter([

  {
    path: '/',
    element: <Inicio />
  },
  {
    path: '/administracion',
    element: <Login />
  },
  {
    path: '/proyecto-pedagogico',
    element: <PageProyecto />
  },
  {
    path: '/historia',
    element: <PageHistoria />
  },
  {
    path: '/cuerpo-directivo',
    element: <PageOrganigrama />
  },
  {
    path: '/galeria',
    element: <PageGaleria />
  }
])