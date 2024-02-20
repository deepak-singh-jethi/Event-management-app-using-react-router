import React from "react";
import EventForm from "../components/EventForm";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";

function EditEvent() {
  // const data = useLoaderData();
  const data = useRouteLoaderData("event-detail");

  const event = data.event;

  return <EventForm event={event}></EventForm>;
}

export default EditEvent;
