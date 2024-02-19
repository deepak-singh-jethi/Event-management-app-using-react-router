import EventsList from "../components/EventsList";
import { useLoaderData, json } from "react-router-dom";

function EventsPage() {
  const data = useLoaderData();

  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }

  const events = data.events;
  return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // ...
    // 1.  return { isError: true, message: "Could not fetch Events" };

    // 2. throw new Error("Could not fetch Events");
    // it will render the nearest error element

    // 3. throw new response(JSON.stringify({ messgae: "Could not fetch events" }), {
    //   status: 500,
    // });

    throw json({ message: "Error in fetching the events" }, { status: 500 });
  } else {
    return response;
    // const resData = await response.json();

    // return resData;
    // const res = new Response("any data", { status: 202 });
  }
}
