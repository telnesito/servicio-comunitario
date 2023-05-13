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
import Noticia_1 from "../components/Noticias/Noticia_1";
import { noticia_1, noticia_2, noticia_3 } from "../components/Noticias/Noticia";
import { EVENTS } from "../components/events/events";

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
  },
  {
    path: 'noticia1',
    element: <Noticia_1 title={noticia_1.title} text={noticia_1.descripcion} />
  },
  {
    path: 'noticia2',
    element: <Noticia_1 title={noticia_2.title} text={noticia_2.descripcion} />

  },
  {
    path: 'noticia3',
    element: <Noticia_1 title={noticia_3.title} text={noticia_3.descripcion} />
  },
  {
    path: EVENTS[0].title,
    element: <Noticia_1 title={EVENTS[0].title} ></Noticia_1>
  },
  {
    path: EVENTS[1].title,
    element: <Noticia_1 title={EVENTS[1].title}></Noticia_1>
  },
  {
    path: EVENTS[2].title,
    element: <Noticia_1 title={EVENTS[2].title}></Noticia_1>
  },
  {
    path: EVENTS[3].title,
    element: <Noticia_1 title={EVENTS[3].title}></Noticia_1>
  },
  {
    path: EVENTS[4].title,
    element: <Noticia_1 title={EVENTS[4].title}></Noticia_1>
  },
  {
    path: EVENTS[5].title,
    element: <Noticia_1 title={EVENTS[5].title}></Noticia_1>
  },

])