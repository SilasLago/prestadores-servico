import Footer from "../Components/Footer/footer";
import Header from "../Components/Header/header";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Prestadores from "../Pages/Prestadores/prestadores";
import Login from "Pages/Login/login";
import AuthWrapper from "Components/AuthWrapper/auth_wrapper";
import BasePage from "Components/BasePage/base_page";
import RegisterPrestador from "Pages/RegisterPrestador/register_prestador";
import Servicos from "Pages/Servicos/servicos";
import ServicosFinalizados from "Pages/ServicosFinalizados/servicos_finalizados";

function PagesRoutes() {
  return (
    <section>
      <Header />
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={ <AuthWrapper /> }>
              <Route element={ <BasePage /> }>
                <Route path="/list">
                  <Route path="prestadores" element={ <Prestadores /> } />
                  <Route path="servicos" element={ <Servicos /> } />
                  <Route path="servicos_finalizados" element={ <ServicosFinalizados /> } />
                </Route>
                <Route path="/register">
                  <Route path="prestadores" element={ <RegisterPrestador /> } />
                </Route>
              </Route>
            </Route>
          </Routes>
        </Router>
      </main>
      <Footer />
    </section>
  )
}

export default PagesRoutes;