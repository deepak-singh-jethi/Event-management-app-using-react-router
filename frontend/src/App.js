import Home from "./pages/Home";
import Events, { loader as eventsLoader } from "./pages/Events";
import EventDetail, {
  loader as EventDetailLoader,
  action as eventDeleteAction,
} from "./pages/EventDetail";
import NewEvent from "./pages/NewEvent";
import EditEvent from "./pages/EditEvent";
import Error from "./pages/Error.js";
import Root from "./RootPage/root.js";
import EventRoot from "./pages/EventRoot.js";
import NewsletterPage, {
  action as newsletterAction,
} from "./pages/Newsletter.js";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { action as manipulateEventAction } from "./components/EventForm.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "events",
        element: <EventRoot />,
        children: [
          {
            index: true,
            element: <Events />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: EventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetail />,
                action: eventDeleteAction,
              },
              {
                path: "edit",
                element: <EditEvent />,
                action: manipulateEventAction,
              },
            ],
          },

          {
            path: "new",
            element: <NewEvent />,
            action: manipulateEventAction,
          },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
