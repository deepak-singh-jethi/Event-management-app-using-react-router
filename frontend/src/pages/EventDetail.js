import React from "react";
import {
  json,
  redirect,
  useLoaderData,
  useRouteLoaderData,
} from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetail() {
  // const data = useLoaderData();
  // useRouteLoaderData("event-detail") enables children to use loader of parent

  const data = useRouteLoaderData("event-detail");
  const event = data.event;
  return (
    <>
      <EventItem event={event}></EventItem>
    </>
  );
}

export default EventDetail;

// this loader is used by both eventdetail page and edit event page
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

// this action is used by both eventdetail
export async function action({ request, params }) {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id, {
    method: request.method,
  });
  if (!response.ok) {
    throw json({ message: "Could not delete the event" }, { status: 500 });
  }

  return redirect("/events");
}
