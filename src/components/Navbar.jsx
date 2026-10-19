
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="mb-6 flex flex-wrap gap-3">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          end={link.to === "/"}
          className={({ isActive }) =>
            `rounded-lg px-4 py-2 text-sm font-semibold transition ${
              isActive
                ? "bg-indigo-600 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-indigo-100"
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
}
