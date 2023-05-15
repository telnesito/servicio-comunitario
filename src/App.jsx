import Inicio from './pages/inicio/Inicio'

import './App.css'
import { Route, Routes } from 'react-router'
import AdminPage from './pages/admin/AdminPage'
import Login from './pages/login/Login'
import Noticias from './components/adminView/Noticias'
import Eventos from './components/adminView/Eventos'
import Organigrama from './components/adminView/Organigrama'
import PageProyecto from './pages/proyecto/ProyectoPedagogico'
import PageHistoria from './pages/historia/pageHistoria'
import PageOrganigrama from './pages/organigrama/PageOrganigrama'
import PageGaleria from './pages/galeria/PageGaleria'
import { ProtectedLogin, RedirectToAdmin } from './routes/protectedRoutes'
import { ContextLoginProvider } from './hooks/ContextLoginProvider'

function App() {

  return (
    <>
      <ContextLoginProvider>
        <Routes>
          <Route path='/' element={<Inicio />}></Route>

          {/* Login */}

          <Route path='/administracion' element={

            <RedirectToAdmin>
              <Login />
            </RedirectToAdmin>
          }></Route>

          {/* Rutas del admin */}

          <Route path='/administracion/main/' element={
            <ProtectedLogin redirectTo='/administracion'>
              <AdminPage />
            </ProtectedLogin>
          }>
            <Route path='noticias' element={<Noticias />}></Route>
            <Route path='eventos' element={<Eventos />}></Route>
            <Route path='organigrama' element={<Organigrama />}></Route>
          </Route>
          {/* Rutas a paginas ekis */}
          <Route path='/proyecto-pedagogico' element={<PageProyecto />}></Route>
          <Route path='/historia' element={<PageHistoria />}></Route>

          <Route path='/cuerpo-directivo' element={<PageOrganigrama />}></Route>

          <Route path='/galeria' element={<PageGaleria />}></Route>


        </Routes>
      </ContextLoginProvider>
    </>
  )
}

export default App


// 	{
	// 		path: "/proyecto-pedagogico",
	// 		element: <PageProyecto />,
	// 	},
	// 	{
	// 		path: "/historia",
	// 		element: <PageHistoria />,
	// 	},
	// 	{
	// 		path: "/cuerpo-directivo",
	// 		element: <PageOrganigrama />,
	// 	},
	// 	{
	// 		path: "/galeria",
	// 		element: <PageGaleria />,
	// 	},