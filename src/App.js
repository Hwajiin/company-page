import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Spinner from "./components/spinner";
import Footer from "./layouts/footer";
import Gnb from "./layouts/gnb";
import NotFound from "./pages/notFound";

const HomePage = lazy(() => import("./pages/homePage"));
const CompanyIntroPage = lazy(() => import("./pages/companyIntroPage"));

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Gnb />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="reports_intro" element={<CompanyIntroPage />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
