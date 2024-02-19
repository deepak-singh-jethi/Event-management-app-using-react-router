import React from "react";
import { useParams, json, useLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetail() {
  const data = useLoaderData();
  const event = data.event;
  return (
    <>
      <EventItem event={event}></EventItem>
    </>
  );
}

export default EventDetail;

export async function loader({ request, params }) {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch detail of for the selected event" },
      { status: 500 }
    );
  } else {
    return response;
  }
}
