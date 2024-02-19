import React from "react";
import EventsNavigations from "../components/EventsNavigation";
import { Outlet } from "react-router-dom";

function EventRoot() {
  return (
    <>
      <EventsNavigations />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default EventRoot;
