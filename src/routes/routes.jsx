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
import {
	noticia_1,
	noticia_2,
	noticia_3,
} from "../components/Noticias/Noticia";
import { ProtectedLogin } from "./protectedRoutes";
import { ContextLoginProvider } from "../hooks/ContextLoginProvider";

export const Router = createBrowserRouter([
	{
		path: "/",
		element: <Inicio />,
	},
	{
		path: "/:id",
		element: <Noticia_1 />,
	},
	{
		path: "/administracion",
		element: <Login />,
	},
	{
		path: "/administracion/main",
		element: <AdminPage />,

		children: [
			{
				path: "noticias",
				element: <Noticias />,
			},
			{
				path: "eventos",
				element: <Eventos />,
			},
			{
				path: "Organigrama",
				element: <Organigrama />,
			},
		],
	},

	{
		path: "/proyecto-pedagogico",
		element: <PageProyecto />,
	},
	{
		path: "/historia",
		element: <PageHistoria />,
	},
	{
		path: "/cuerpo-directivo",
		element: <PageOrganigrama />,
	},
	{
		path: "/galeria",
		element: <PageGaleria />,
	},
	{
		path: "noticia1",
		element: <Noticia_1 title={noticia_1.title} text={noticia_1.descripcion} />,
	},
	{
		path: "noticia2",
		element: <Noticia_1 title={noticia_2.title} text={noticia_2.descripcion} />,
	},
	{
		path: "noticia3",
		element: <Noticia_1 title={noticia_3.title} text={noticia_3.descripcion} />,
	},
]);
