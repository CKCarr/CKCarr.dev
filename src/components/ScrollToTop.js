import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  // Get the current route and optional section anchor.
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Let React control scrolling during client-side navigation.
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    // Restore the browser's original setting if this component unmounts.
    return () => {
      window.history.scrollRestoration = previous;
    };
  }, []);

  useLayoutEffect(() => {
    // Contact and other anchor links manage their own position.
    if (hash) return;

    // Temporarily override global smooth scrolling.
    const html = document.documentElement;
    const previous = html.style.scrollBehavior;

    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    html.style.scrollBehavior = previous;
  }, [pathname, hash]);

  return null;
}
