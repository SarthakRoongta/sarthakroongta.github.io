import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../theme/ThemeContext";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, pokelogo, pokeball, menu, close } from "../assets";

const Navbar = () => {
  const { pokeMode, togglePokeMode } = useContext(ThemeContext);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  const PokeSwitch = (
    <label className="relative inline-block w-10 h-10 cursor-pointer">
      <input
        type="checkbox"
        checked={pokeMode}
        onChange={togglePokeMode}
        className="peer sr-only"
      />
      <div className="absolute inset-0 rounded-full bg-white" />
      <img
        src={pokeball}
        alt="toggle"
        className="relative z-10 h-full w-full object-contain transition-opacity duration-300 peer-checked:opacity-0"
      />
      <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 peer-checked:opacity-100">
        <span className="h-full w-full rounded-full bg-violet-600 border-2 border-white flex items-center justify-center">
          <span className="h-4 w-4 rounded-full bg-black" />
        </span>
      </span>
    </label>
  );

  return (
    <nav
      className={`
        ${styles.paddingX}
        fixed top-0 z-20 w-full py-5 flex items-center
        bg-primary
        navbar
      `}
    >
      <div className="flex w-full items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="relative h-9 w-9">
            <div className="absolute inset-0 rounded-full bg-white" />
            <img
              src={pokeMode ? pokelogo : logo}
              alt="logo"
              className="relative z-10 h-full w-full object-contain"
            />
          </div>
          <p className="flex text-[18px] font-bold text-white cursor-pointer">
            Sarthak&nbsp;Roongta
            <span className="hidden sm:block">
              &nbsp;|&nbsp;{pokeMode ? "Pokédex" : "Personal Website"}
            </span>
          </p>
        </Link>

        <ul className="hidden sm:flex list-none items-center gap-10">
          {navLinks.map(({ id, title }) => (
            <li
              key={id}
              onClick={() => setActive(title)}
              className={`
                ${active === title ? "text-white" : "text-secondary"}
                hover:text-white cursor-pointer text-[18px] font-medium
              `}
            >
              <a href={`#${id}`}>{title}</a>
            </li>
          ))}
          {PokeSwitch}
        </ul>

        <div className="sm:hidden flex items-center gap-4">
          {PokeSwitch}
          <img
            src={open ? close : menu}
            alt="menu"
            className="h-[28px] w-[28px] object-contain cursor-pointer"
            onClick={() => setOpen(!open)}
          />
          <div
            className={`
              ${open ? "flex" : "hidden"}
              absolute top-20 right-0 z-10 my-2 mx-4 min-w-[140px] p-6 rounded-xl
              ${pokeMode ? "bg-[#E3350D]" : "black-gradient"}
              navbar-dropdown
            `}
          >
            <ul className="flex flex-col gap-4 list-none">
              {navLinks.map(({ id, title }) => (
                <li
                  key={id}
                  onClick={() => {
                    setOpen(false);
                    setActive(title);
                  }}
                  className={`
                    ${active === title ? "text-white" : "text-secondary"}
                    cursor-pointer text-[16px] font-medium
                  `}
                >
                  <a href={`#${id}`}>{title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
