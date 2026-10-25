import { Link } from "react-router-dom";

// Styles shared by every button appearance.
const baseStyles = [
  "inline-flex items-center justify-center",
  "min-h-[44px] rounded-full px-6 py-3",
  "font-semibold text-center",
  // Smoothly animate both color and movement.
  "transition-colors transition-transform duration-200 ease-out",
  // Lift the button slightly when hovered.
  "hover:-translate-y-1", 
  // Respect users who prefer reduced motion.
  "motion-reduce:transform-none motion-reduce:transition-none",
  "focus-visible:outline focus-visible:outline-2",
  "focus-visible:outline-offset-4 focus-visible:outline-v3-violet",
].join(" ");

// Each variant describes an appearance.
// Light and dark contexts have different contrast requirements.
const variants = {
  light: {
    primary:
      "bg-v3-action-primary text-white hover:bg-v3-action-primaryHover hover:text-white",
    secondary:
      "bg-v3-action-secondary text-v3-ink hover:bg-v3-action-secondaryHover hover:text-v3-ink",
    outline:
      "border border-v3-violet text-v3-violet hover:bg-v3-lavender hover:text-v3-violet",
  },

  dark: {
    primary:
      "bg-v3-action-secondaryHover text-v3-plum hover:bg-v3-mint hover:text-v3-plum",
    secondary:
      "bg-white/10 text-white hover:bg-white/20 hover:text-white",
    outline:
      "border border-white/40 text-white hover:bg-white/10 hover:text-white",
  },
};

export default function Button({
  children,
  variant = "primary",
  theme = "light",
  to,
  href,
  className = "",
  type = "button",
  disabled = false,
  ...props
}) {
  const appearance =
    variants[theme]?.[variant] ?? variants.light.primary;

  const styles = `${baseStyles} ${appearance} ${className}`;

  // React Router Link is for navigation within the application.
  if (to) {
    return (
      <Link to={to} className={styles} {...props}>
        {children}
      </Link>
    );
  }

  // Standard anchor is for external URLs or page fragments.
  if (href) {
    return (
      <a href={href} className={styles} {...props}>
        {children}
      </a>
    );
  }

  // Native button is for actions such as submitting a form.
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${styles} disabled:cursor-not-allowed disabled:opacity-50`}
      {...props}
    >
      {children}
    </button>
  );
}
