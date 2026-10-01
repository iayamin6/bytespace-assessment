import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
const groups = [
  ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Finance", "Sport"],
  ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
];
export function Footer() {
  const [message, setMessage] = useState("");
  function subscribe(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage(
      "Thanks for your interest! Newsletter subscriptions are not connected in this preview.",
    );
  }
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="newsletter">
            <Link to="/" aria-label="ByteSpace home">
              <img
                src="/assets/logo-dark.svg"
                alt="ByteSpace"
                width="171"
                height="32"
              />
            </Link>
            <p>
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>
            <form onSubmit={subscribe}>
              <label className="sr-only" htmlFor="newsletter-email">
                Email for newsletter
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email"
                required
                autoComplete="email"
              />
              <button className="button">Search</button>
            </form>
            <p className="fine-print">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
            <p className="form-message" role="status">
              {message}
            </p>
          </div>
          <nav className="footer-links" aria-label="Footer navigation">
            {groups.map((group, i) => (
              <div key={i}>
                {group.map((label) => (
                  <a
                    key={label}
                    href={
                      i === 2
                        ? label === "Become a Creator"
                          ? "/signup"
                          : "#community"
                        : "#courses"
                    }
                  >
                    {label}
                  </a>
                ))}
              </div>
            ))}
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© 2023 ByteSpace. All rights reserved.</span>
          <div>
            {["Privacy Policy", "Terms of Service", "Cookies Settings"].map(
              (label) => (
                <button
                  key={label}
                  onClick={() =>
                    setMessage(
                      `${label}: This assessment preview does not use tracking cookies, store form entries, or process payments.`,
                    )
                  }
                >
                  {label}
                </button>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
