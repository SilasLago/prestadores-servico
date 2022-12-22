import Footer from "../Components/Footer/footer";
import Header from "../Components/Header/header";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from "Pages/Login/login";
import { lazy, Suspense } from "react";
import LoadingModal from "Components/Modals/LoadingModal/loading_modal";

const Prestadores = lazy(() => import("Pages/Prestadores/prestadores"));
const Servicos = lazy(() => import("Pages/Servicos/servicos"));
const ServicosFinalizados = lazy(() => import("Pages/ServicosFinalizados/servicos_finalizados"));
const RegisterPrestador = lazy(() => import("Pages/RegisterPrestador/register_prestador"));
const AuthWrapper = lazy(() => import("Components/AuthWrapper/auth_wrapper"));
const BasePage = lazy(() => import("Components/BasePage/base_page"));

function PagesRoutes() {
  return (
    <section>
      <Header />
      <main>
        <Suspense fallback={<LoadingModal />}>
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route element={<AuthWrapper />}>
                <Route element={<BasePage />}>
                  <Route path="/list">
                    <Route path="prestadores" element={<Prestadores />} />
                    <Route path="servicos" element={<Servicos />} />
                    <Route path="servicos_finalizados" element={<ServicosFinalizados />} />
                  </Route>
                  <Route path="/register">
                    <Route path="prestadores" element={<RegisterPrestador />} />
                  </Route>
                </Route>
              </Route>
            </Routes>
          </Router>
        </Suspense>
      </main>
      <Footer />
    </section>
  )
}

export default PagesRoutes;