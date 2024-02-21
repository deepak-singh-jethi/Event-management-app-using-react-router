import React from "react";
import EventForm from "../components/EventForm";
import { json, redirect } from "react-router-dom";

function NewEvent() {
  return <EventForm method="POST" />;
}

export default NewEvent;

//action for creating new event
//this is a server side action that will be called when the user clicks the submit button on the event form
//this action will send a request to the server to create a new event
//the request will include the data from the event form
//the server will create the new event and return the event data
//the action will redirect the user to the events page
//if the server returns an error, the action will return the error response
//if the server returns a success response, the action will return a redirect response to the events page

/* export async function action({ request, params }) {
  const data = await request.formData();
  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not save event." }, { status: 500 });
  }

  return redirect("/events");
} */
