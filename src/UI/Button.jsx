import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "text-sm bg-yellow-400 uppercase font-semibold text-stone-800 inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:bg-yellow-300 focus:ring-offset-2 focus:ring-yellow-300 disabled:cursor-not-allowed";
  const styles = {
    primary: base + "py-3 px-4 md:px-6 md:py-4",
    small: base + "px-6 py-2 md:px-5 md:py-2.5 text-xs",
    round: base + "px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    secondary:
      "py-2.5 px-4 md:px-6 md:py-3.5 border-2 border-stone-300 uppercase font-semibold text-stone-800 inline-block tracking-wide rounded-full hover:bg-stone-300 transition-colors duration-300 focus:text-stone-900 focus:outline-none focus:ring focus:bg-stone-300 focus:ring-offset-2 focus:ring-stone-300 disabled:cursor-not-allowed",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  return (
    <button className={styles[type]} type={type} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
