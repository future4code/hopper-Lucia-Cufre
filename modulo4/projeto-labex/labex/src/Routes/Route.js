import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ListTrips from "../Pages/ListTripsPage";
import AppForm from "../Pages/ApplicationFormPage";
import LoginPage from "../Pages/LoginPage";
import AdminHome from "../Pages/AdminHomePage";
import TripDetails from "../Pages/TripDetailsPage";
import CreateTrip from "../Pages/CreateTripPage";
import ErrorPage from "../Pages/ErrorPage";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/trips/list" element={<ListTrips />} />
          <Route path="/trips/application" element={<AppForm />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin/trips/list" element={<AdminHome />} />
          <Route path="/admin/trips/:id" element={<TripDetails />} />
          <Route path="/admin/trips/create" element={<CreateTrip />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
