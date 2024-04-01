import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Container, Spinner } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

const Home = lazy(() => import("./pages/Home"));
const Store = lazy(() => import("./pages/Store"));
const History = lazy(() => import("./pages/History"));

const LoadingFallback = (): JSX.Element => (
  <>
    <Spinner animation="border" role="status" />
    <p>Loading</p>
  </>
);

const App: React.FC = (): JSX.Element => {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<LoadingFallback />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/store"
            element={
              <Suspense fallback={<LoadingFallback />}>
                <Store />
              </Suspense>
            }
          />
          <Route
            path="/history"
            element={
              <Suspense fallback={<LoadingFallback />}>
                <History />
              </Suspense>
            }
          />
        </Routes>
      </Container>
      <Footer />
    </ShoppingCartProvider>
  );
};

export default App;
