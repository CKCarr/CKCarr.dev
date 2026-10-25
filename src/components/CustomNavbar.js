
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/images/ck-logo.png";
import Container from "./Container";

// One navigation list shared by desktop and mobile.
// This prevents the two menus from becoming inconsistent.
const navItems = [
  { label: "Home", to: "/#home", hash: true },
  { label: "Blog", to: "/blog" },
  { label: "Projects", to: "/projects" },
  { label: "Resume", to: "/resume" },
  { label: "Contact", to: "/#contact", hash: true },
];

export default function CustomNavbar() {
  // React state controls whether the mobile menu is visible.
  const [openNav, setOpenNav] = useState(false);

  // Read the current route and URL hash.
  const location = useLocation();
  useEffect(() => {
    // Close the mobile menu when the screen reaches
    // Tailwind's default lg breakpoint (1024px).
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpenNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup prevents listeners from accumulating.
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

const renderLink = (item) => {
  // Determine which navigation item represents the current page.
  // Home and Contact both point to sections of the homepage.
  const isActive = item.hash
    ? location.pathname === "/" &&
      location.hash === `#${item.to.split("#")[1]}`
    : location.pathname === item.to;

  // Shared styling for desktop and mobile navigation.
  const className =
    "block rounded-md border-2 px-4 py-2 text-sm " +
    "transition-colors focus-visible:outline " +
    "focus-visible:outline-2 focus-visible:outline-plum " +
    (isActive
      ? "border-paleturquoise bg-darkcyan text-white"
      : "border-darkcyan text-white hover:border-plum");

  if (item.hash) {
    return (
      <HashLink
        key={item.to}
        to={item.to}
        className={className}
        aria-current={isActive ? "location" : undefined}
        onClick={() => setOpenNav(false)}
      >
        {item.label}
      </HashLink>
    );
  }

  return (
    <Link
      key={item.to}
      to={item.to}
      className={className}
      aria-current={isActive ? "page" : undefined}
      onClick={() => setOpenNav(false)}
    >
      {item.label}
    </Link>
  );
};


  return (
    <Container>
    {/* Existing logo and navigation */}
     <header
      id="header"
      className="fixed inset-x-0 top-0 z-50 bg-midnightblue"
    >
      <nav
        className="mx-auto flex w-full items-center
                   justify-between px-4 py-2"
        aria-label="Main navigation"
      >
        {/* Logo links to the homepage. */}
        <Link
          to="/"
          className="flex items-center"
          onClick={() => setOpenNav(false)}
        >
          <img
            src={logo}
            alt="CKCarr portfolio homepage"
            className="h-16 w-16 rounded-full object-contain"
          />
        </Link>

        {/* Desktop navigation is visible at lg and above. */}
        <div className="hidden items-center gap-4 lg:flex">
          {navItems.map(renderLink)}
        </div>

        {/* Mobile menu toggle. */}
        <button
          type="button"
          className="rounded-md border border-darkcyan
                     p-2 text-white lg:hidden"
          aria-label={openNav ? "Close menu" : "Open menu"}
          aria-expanded={openNav}
          aria-controls="mobile-navigation"
          onClick={() => setOpenNav((previous) => !previous)}
        >
          {openNav ? (
            <span aria-hidden="true" className="text-2xl">
              ×
            </span>
          ) : (
            <span aria-hidden="true" className="text-2xl">
              ☰
            </span>
          )}
        </button>
      </nav>

      {/* Mobile navigation remains mounted so aria-controls
          always refers to an existing element. */}
      <div
        id="mobile-navigation"
        hidden={!openNav}
        className={
          "absolute left-0 top-full w-full " +
          "border-t border-darkcyan bg-midnightblue " +
          "p-4 shadow-lg lg:hidden " +
          (!openNav ? "hidden" : "")
        }
      >
        <div className="flex flex-col gap-3">
          {navItems.map(renderLink)}
        </div>
      </div>
    </header>
  </Container>

  );
}
