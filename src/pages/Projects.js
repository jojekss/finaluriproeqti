import { useLanguage } from "../context/LanguageContext";
import texts from "../data/texts";

export default function Projects() {
  const { language } = useLanguage();
  const t = texts[language];

  const projects = [
    { title: "React SPA", desc: t.projects?.spa },
    { title: "Dark/Light Theme", desc: t.projects?.theme },
    { title: "Local Storage Interaction", desc: t.projects?.storage },
  ];

  return (
    <main>
      <h1>{t.projects?.title || "პროექტები"}</h1>
      <ul>
        {projects.map((p, i) => (
          <li key={i} style={{ marginBottom: "1rem" }}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
