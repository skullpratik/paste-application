
import { NavbarData } from "../data/Navbar";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full sticky top-0 z-50 glass-card flex justify-between items-center px-8 py-3 mb-8 shadow-glass backdrop-blur-md">
      <div className="flex items-center gap-2 select-none">
        <span className="text-2xl font-bold text-primary tracking-tight">Paste<span className="text-accent">X</span></span>
      </div>
      <div className="flex gap-x-6 items-center">
        {NavbarData.map((link, idx) => (
          <NavLink
            key={idx}
            to={link.path}
            className={({ isActive }) =>
              isActive
                ? "text-accent font-semibold text-lg border-b-2 border-accent pb-1 transition"
                : "text-white font-medium text-lg hover:text-accent transition"
            }
          >
            {link.title}
          </NavLink>
        ))}
        {/* Dark/Light mode toggle placeholder */}
        <button className="ml-4 w-8 h-8 rounded-full bg-white/20 hover:bg-accent transition flex items-center justify-center" title="Toggle theme">
          <span className="text-xl">🌓</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
