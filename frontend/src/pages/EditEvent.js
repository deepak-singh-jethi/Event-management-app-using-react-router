import React from "react";
import EventForm from "../components/EventForm";
import { useLoaderData } from "react-router-dom";

function EditEvent() {
  const data = useLoaderData();
  const event = data.event;

  return <EventForm event={event} />;
}

export default EditEvent;
