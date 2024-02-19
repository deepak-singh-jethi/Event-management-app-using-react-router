import React from "react";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();

  let title = "An error occured!";
  let message = "Something went wrong";
  if (error.status === 500) {
    message = error.data.message;
  }
  if (error.status === 400) {
    title = "Not found";
    message = "Could not find resource or page";
  }
  return (
    <>
      <PageContent title={title}>
        <p>{message}</p>
        <p>Please try again later.</p>
      </PageContent>
    </>
  );
}

export default Error;
