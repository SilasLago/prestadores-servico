import Footer from "../Components/Footer/footer";
import Header from "../Components/Header/header";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Main from "../Pages/Main/main";
import Login from "Pages/Login/login";
import AuthWrapper from "Components/AuthWrapper/auth_wrapper";
import BasePage from "Components/BasePage/base_page";

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
                <Route path="/home" element={ <Main /> } />
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