import { Routes, Route, useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "./pages/Home";
import { Auth } from "./pages/Auth";
export function App() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    document.title =
      pathname === "/login"
        ? "Sign In — ByteSpace"
        : pathname === "/signup"
          ? "Create an Account — ByteSpace"
          : "ByteSpace — Discover your next skill";
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Auth key="login" mode="login" />} />
      <Route path="/signup" element={<Auth key="signup" mode="signup" />} />
      <Route
        path="*"
        element={
          <main className="not-found blue-grid">
            <strong>404</strong>
            <h1>The page you’re looking for doesn’t exist</h1>
            <Link className="button" to="/">
              Back to home
            </Link>
          </main>
        }
      />
    </Routes>
  );
}
