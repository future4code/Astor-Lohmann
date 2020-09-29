export const goBack = (history) => {
    history.goBack();
  };

export const goToHomePage = (history) => {
    history.push("/");
  };

export const goToApplications = (history) => {
    history.push("/application");
  };

export const goToLogin = (history) => {
    history.push("/login");
  };

export const goToCreateTrips = (history) => {
    history.push("/trips/create");
  };

export const goToListTrips = (history) => {
    history.push("/trips/list");
  };

export const goToDetailTrips = (history) => {
    history.push("/trips/details");
  };