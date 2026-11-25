import logoClarea from "../assets/logo-clarea.png";

// The Clarea_ wordmark painted in the current text colour: black on light and pink grounds,
// white on the photo and on dark sections. It uses the PNG as a CSS mask until a vector logo exists.
export default function Logo({ className = "", label = "Clarea" }) {
  return (
    <span
      role={label ? "img" : undefined}
      aria-label={label || undefined}
      aria-hidden={label ? undefined : true}
      className={`logo ${className}`}
      style={{ "--logo-src": `url(${logoClarea})` }}
    />
  );
}
