import React from "react";
import EventsNavigations from "../components/EventsNavigation";
import { Outlet } from "react-router-dom";

function EventRoot() {
  return (
    <>
      <EventsNavigations />
      <Outlet></Outlet>
    </>
  );
}

export default EventRoot;
