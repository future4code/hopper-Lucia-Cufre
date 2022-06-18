export function goToHomePage(navigate) {
  navigate("/");
}

export function goToListTrips(navigate) {
  navigate("/trips/list");
}

export function goToAppFrom(navigate) {
  navigate("/trips/application");
}

export function goToLoginPage(navigate) {
  navigate("/login");
}

export function goToAdminHome(navigate) {
  navigate("/admin/trips/list");
}

export function goToTripDetails(id, navigate) {
  navigate(`/admin/trips/${id}`);
}

export function goToCreateTrip(navigate) {
  navigate("/admin/trips/create");
}

export function goToErroPage(navigate) {
  navigate("*");
}
