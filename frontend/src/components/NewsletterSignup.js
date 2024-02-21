import classes from "./NewsletterSignup.module.css";
import { useFetcher, Form } from "react-router-dom";

function NewsletterSignup() {
  const fetcher = useFetcher();
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
