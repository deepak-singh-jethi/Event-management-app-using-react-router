import { useEffect } from "react";
import classes from "./NewsletterSignup.module.css";
import { useFetcher, Form } from "react-router-dom";

function NewsletterSignup() {
  const fetcher = useFetcher();
  const { data, state } = fetcher;
  //state = "idle" | "submitting" | "loading" | "succeeded" | "failed"
  useEffect(() => {
    if (state === "idle" && data && data.message) {
      window.alert(data.message);
    }
  }, [data]);

  return (
    <fetcher.Form
      method="post"
      action="/newsletter"
      className={classes.newsletter}>
      <input
        type="email"
        name="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
