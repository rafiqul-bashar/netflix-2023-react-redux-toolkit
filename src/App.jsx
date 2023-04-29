import { Route, Routes } from "react-router-dom";
import {
  HomePage,
  LoginPage,
  NotFoundPage,
  ProfilePage,
  RegisterPage,
  SearchMovieByNamePage,
  SearchPage,
  SingleMoviePage,
} from "./pages";
import { PrivateRoute, PublicRoute } from "./components";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black/90">
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/movies/:id"
          element={
            <PrivateRoute>
              <SingleMoviePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/movies/search-results"
          element={
            <PrivateRoute>
              <SearchMovieByNamePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/browse-movies"
          element={
            <PrivateRoute>
              <SearchPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route
          path="/my-profile"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
