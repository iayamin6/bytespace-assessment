import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { CourseCard, Avatars } from "../components/CourseCard";
import { courses } from "../data/courses";
export function Auth({ mode }: { mode: "login" | "signup" }) {
  const signup = mode === "signup";
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage(
      signup
        ? "Your details are valid. Account creation is not connected in this frontend preview; no information has been saved."
        : "Your details are valid. Sign-in is not connected in this frontend preview; no information has been sent.",
    );
  }
  return (
    <main className="auth-page blue-grid">
      <div className="container">
        <Link className="auth-brand" to="/" aria-label="Back to ByteSpace home">
          <img
            src="/assets/brand-mark.svg"
            alt="ByteSpace"
            width="29"
            height="32"
          />
        </Link>
        <div className="auth-layout">
          <section className="auth-intro">
            <h2>{signup ? "Sign up and come in" : "Sign in with ease"}</h2>
            <p>
              {signup
                ? "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
                : "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."}
            </p>
            <div className="auth-art" aria-hidden="true">
              <div className="auth-card-back">
                <CourseCard course={courses[1]} />
              </div>
              <div className="auth-card-front">
                <CourseCard course={courses[2]} />
              </div>
              <img className="auth-ring" src="/assets/ring-white.svg" alt="" />
              <img
                className="auth-spring"
                src="/assets/spring-white.svg"
                alt=""
              />
              <img
                className="auth-pyramid"
                src="/assets/pyramid-white.svg"
                alt=""
              />
              <div className="happy-students">
                <span>Happy Students</span>
                <small>4.5 (240) ★</small>
                <Avatars />
              </div>
            </div>
          </section>
          <section
            className={`auth-panel ${signup ? "signup-panel" : ""}`}
            aria-labelledby="auth-title"
          >
            <p className="auth-eyebrow">
              {signup ? "Create an Account" : "Sign In"}
            </p>
            <h1 id="auth-title">
              {signup ? (
                <>
                  Welcome to
                  <br />
                  ByteSpace
                </>
              ) : (
                "Welcome Back"
              )}
            </h1>
            <form onSubmit={submit}>
              {signup && (
                <div className="field">
                  <label htmlFor="full-name">Full Name</label>
                  <input
                    id="full-name"
                    name="name"
                    placeholder="Jamie Davis"
                    autoComplete="name"
                    required
                    minLength={2}
                    maxLength={100}
                  />
                </div>
              )}
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="designer@example.com"
                  autoComplete="email"
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="password">Password</label>
                <div className="password-input">
                  <input
                    id="password"
                    name="password"
                    type={visible ? "text" : "password"}
                    placeholder="********"
                    autoComplete={signup ? "new-password" : "current-password"}
                    minLength={8}
                    required
                    aria-describedby="password-hint"
                  />
                  <button
                    type="button"
                    className="icon-button"
                    onClick={() => setVisible(!visible)}
                    aria-label={visible ? "Hide password" : "Show password"}
                  >
                    {visible ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                <span id="password-hint" className="sr-only">
                  Use at least eight characters.
                </span>
              </div>
              <div className="auth-submit">
                <button className="button">
                  {signup ? "Continue" : "Sign In"}
                </button>
              </div>
              <p role="status" className="auth-message">
                {message}
              </p>
            </form>
            {!signup && (
              <div className="social-login">
                <div className="divider">
                  <span>or</span>
                </div>
                <div className="social-buttons">
                  <button
                    aria-label="Sign in with Facebook"
                    onClick={() =>
                      setMessage(
                        "Facebook sign-in is not connected in this frontend preview.",
                      )
                    }
                  >
                    <span className="facebook-icon">f</span>
                  </button>
                  <button
                    aria-label="Sign in with Google"
                    onClick={() =>
                      setMessage(
                        "Google sign-in is not connected in this frontend preview.",
                      )
                    }
                  >
                    <span>G</span>
                  </button>
                </div>
              </div>
            )}
            <p className="auth-switch">
              {signup ? "Already have an account?" : "New user?"}{" "}
              <Link to={signup ? "/login" : "/signup"}>
                {signup ? "Login" : "Create an account"}
              </Link>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
