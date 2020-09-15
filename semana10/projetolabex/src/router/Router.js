import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from '../screens/HomePage'
import ApplicationPage from '../screens/ApplicationPage'
import CreateTrips from '../screens/DetailTrips'
import DetailTrips from '../screens/DetailTrips'
import ListTrips from '../screens/ListTrips'
import LoginPage from '../screens/LoginPage'

const Router = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/application">
            <ApplicationPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/trips/create">
            <CreateTrips />
          </Route>
          <Route exact path="/trips/list">
            <ListTrips />
          </Route>
          <Route exact path="/trips/details">
            <DetailTrips />
          </Route>
          <Route>
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  };
  
  export default Router;