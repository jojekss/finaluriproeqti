import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useLanguage } from "../context/LanguageContext";
import texts from "../data/texts";

export default function Header() {
  const { language, toggleLanguage } = useLanguage();
  const t = texts[language];

  return (
    <header>
      <nav>
        <NavLink to="/" end>
          {t.nav.home}
        </NavLink>
        <NavLink to="/blog">{t.nav?.blog || "ბლოგი"}</NavLink>
        <NavLink to="/projects">{t.nav?.projects || "პროექტები"}</NavLink>

        <NavLink to="/about">{t.nav.about}</NavLink>
        <NavLink to="/contact">{t.nav.contact}</NavLink>
      </nav>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button onClick={toggleLanguage}>
          {language === "ka" ? "English" : "ქართული"}
        </button>
        <ThemeToggle />
      </div>
    </header>
  );
}
