import { createBrowserRouter } from "react-router-dom";
import Inicio from "../pages/inicio/Inicio";
import Login from "../pages/login/Login";
import PageProyecto from "../pages/proyecto/ProyectoPedagogico";
import PageHistoria from "../pages/historia/pageHistoria";
import PageOrganigrama from "../pages/organigrama/PageOrganigrama";
import PageGaleria from "../pages/galeria/PageGaleria";
import AdminPage from "../pages/admin/AdminPage";
import Noticias from "../components/adminView/Noticias";
import Eventos from "../components/adminView/Eventos";
import Organigrama from "../components/adminView/Organigrama";

export const Router = createBrowserRouter([

  {
    path: '/',
    element: <Inicio />
  },
  {
    path: '/administracion',
    element: <Login />,
  },
  {
    path: '/administracion/main',
    element: <AdminPage />,
    children: [
      {
        path: 'noticias',
        element: <Noticias />
      },
      {
        path: 'eventos',
        element: <Eventos />
      },
      {
        path: 'Organigrama',
        element: <Organigrama />
      }
    ]
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