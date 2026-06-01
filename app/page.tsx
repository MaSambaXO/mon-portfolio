"use client";

import { useState } from "react";

type View = "home" | "project" | "info";

type Project = {
  name: string;
  date: string;
  description: string[];
  role: string[];
  images: string[];
};

const BIO =
  "Diplômé d'un DN MADE Graphisme à Gobelins Paris, je développe une pratique du design orientée vers la direction artistique, l'identité visuelle et la narration. À travers mes projets, j'explore les liens entre image, culture et contexte afin de concevoir des univers cohérents et porteurs de sens.";

const INFO_PHOTO = "/projets/Maphoto-1.jpg";

const SKILLS = [
  "Direction artistique",
  "Branding",
  "Design graphique",
  "Web design",
  "Typographie",
  "Design éditorial",
  "Montage vidéo",
];

type ContactItem = { text: string; href?: string };

const CONTACT: ContactItem[] = [
  { text: "Paris, France" },
  { text: "+33 6 47 34 90 34" },
  {
    text: "ma.samba.dia.carvou@gmail.com",
    href: "mailto:ma.samba.dia.carvou@gmail.com",
  },
  {
    text: "linkedin.com/in/masambadia",
    href: "https://linkedin.com/in/masambadia",
  },
  {
    text: "behance.net/ma-sambadia",
    href: "https://behance.net/ma-sambadia",
  },
];

const PROJECTS: Project[] = [
  {
    name: "Bedless",
    date: "Février 2025",
    description: [
      "Bedless est un projet de design spéculatif qui interroge la crise du logement à travers le prisme des plateformes numériques. En détournant les codes visuels et les mécaniques de réservation d'applications comme Airbnb ou Booking, le projet imagine un futur dans lequel l'accès à un lit devient un service marchandisé, évalué et optimisé.",
      "L'identité visuelle et l'interface ont été conçues pour reproduire l'esthétique rassurante des plateformes contemporaines tout en révélant progressivement l'absurdité et la violence des situations qu'elles présentent. Le projet questionne la manière dont les produits numériques influencent notre perception des enjeux sociaux.",
    ],
    role: ["Direction artistique", "Graphisme", "Web design"],
    images: ["/projets/Bedless-1.png","/projets/Bedless-2.png","/projets/Bedless-3.png","/projets/Bedless-4.png","/projets/Bedless-5.png","/projets/Bedless-6.png","/projets/Bedless-7.png"],
  },

  {
    name: "Next Station Chatelet",
    date: "Janvier 2026",
    description: [
      "NSC est l'identité visuelle d'une organisation esport fictive inspirée de la culture urbaine parisienne, des réseaux de transport et du streetwear contemporain.",
      "Le projet combine branding, design graphique et direction artistique afin de construire un système visuel capable d'exister sur différents supports. Chaque élément a été pensé pour créer une identité forte, reconnaissable et ancrée dans un contexte culturel spécifique.",
    ],
    role: ["Direction artistique", "Graphisme"],
    images: ["/projets/NSC-2.png","/projets/NSC-3.png","/projets/NSC-4.png","/projets/NSC-5.png","/projets/NSC-6.png","/projets/NSC-7.png"],
  },

  {
    name: "Breathe!",
    date: "Juin 2023",
    description: [
      "Breathe! est un projet européen de médiation culturelle autour des objets africains conservés dans les collections de musées européens. J'ai été chargé par l'association Alter-Natives de réaliser le site du projet.",
      "Développé en collaboration avec une graphiste senior, le site transpose l'identité visuelle du projet dans un environnement numérique accessible, lisible et responsive. L'objectif était de valoriser les contenus pédagogiques et les recherches du programme à travers une expérience de consultation claire et engageante.",
    ],
    role: ["Web design"],
    images: ["/projets/Breathe-1.png","/projets/Breathe-2.png","/projets/Breathe-3.png","/projets/Breathe-4.png"],
  },

  {
    name: "Mémoire",
    date: "Janvier 2025",
    description: [
      "Strive est un projet de mémoire autour des interfaces diégétiques dans les jeux vidéo de science-fiction. Inspiré par des œuvres comme Mirror's Edge, Dead Space ou Cyberpunk 2077, le projet explore la manière dont une interface peut participer à la construction d'un univers plutôt que se limiter à transmettre de l'information.",
      "À travers la conception d'un jeu fictif, d'interfaces et de systèmes visuels, Strive cherche à intégrer la narration, le gameplay et l'identité visuelle dans une expérience cohérente.",
    ],
    role: ["Recherche", "Direction artistique", "Game design"],
    images: ["/projets/Strive-1.png","/projets/Strive-2.png","/projets/Strive-3.png","/projets/Strive-4.png"],
  },

  {
    name: "Explor'émoi",
    date: "Octobre 2025",
    description: [
      "Explor'Émoi est un projet de médiation numérique conçu pour le tiers-lieu Comme Vous Émoi à Montreuil. Le projet réinvente la découverte d'un espace culturel à travers les codes du jeu vidéo et de la narration interactive.",
      "L'expérience prend la forme d'un visual novel dans lequel les visiteurs rencontrent différents personnages associés aux espaces et activités du lieu. Le projet explore la manière dont le design interactif peut transformer l'information en expérience.",
    ],
    role: ["Recherche", "Branding", "Web design"],
    images: ["/projets/Explor'Emoi-1.png","/projets/Explor'Emoi-2.png","/projets/Explor'Emoi-3.png","/projets/Explor'Emoi-4.png"],
  },

  {
    name: "Cloud Temple",
    date: "Décembre 2023 / Juillet 2025",
    description: [
      "Cloud Temple est une entreprise française spécialisée dans le cloud et la cybersécurité. Durant deux années d'alternance, j'ai participé à l'évolution de son écosystème digital à travers des projets de web design, de communication visuelle et d'identité de marque.",
      "Mes missions ont notamment porté sur la conception de pages web, la refonte du système de navigation du site, la création de présentations de marque et la production de contenus pour les réseaux sociaux. Ces projets ont été développés en collaboration avec les équipes marketing, UX et communication.",
    ],
    role: ["Web design", "Graphisme"],
    images: ["/projets/CloudTemple-1.png","/projets/CloudTemple-2.png","/projets/CloudTemple-3.png","/projets/CloudTemple-4.png","/projets/CloudTemple-5.png"],
  },
];

const COLS:      React.CSSProperties = { gridTemplateColumns: "1fr 2fr 1fr 1fr" };
const INFO_COLS: React.CSSProperties = { gridTemplateColumns: "1fr 3fr 1fr" };
const CV_IMAGE = "/projets/CV transparent.png";

function ContactBlock({ stopProp = false }: { stopProp?: boolean }) {
  const stop = stopProp
    ? (e: React.MouseEvent) => e.stopPropagation()
    : undefined;
  return (
    <>
      {CONTACT.map(({ text, href }) =>
        href ? (
          <a
            key={text}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="block hover:opacity-60"
            onClick={stop}
          >
            {text}
          </a>
        ) : (
          <div key={text}>{text}</div>
        )
      )}
    </>
  );
}

export default function Home() {
  const [view, setView] = useState<View>("home");
  const [active, setActive] = useState(0);
  const [imgIdx, setImgIdx] = useState(0);
  const [dark, setDark] = useState(true);

  const openProject = (i: number) => {
    setActive(i);
    setImgIdx(0);
    setView("project");
  };

  const prev = () => {
    const len = PROJECTS[active].images.length;
    setImgIdx((n) => (n - 1 + len) % len);
  };

  const next = () => {
    const len = PROJECTS[active].images.length;
    setImgIdx((n) => (n + 1) % len);
  };

  const bg    = dark ? "bg-black text-white" : "bg-white text-black";
  const photo = dark ? "bg-zinc-800"         : "bg-zinc-300";

  const currentImage = PROJECTS[active].images[imgIdx] ?? null;
  const totalImages = PROJECTS[active].images.length;

  return (
    <div
      className={`min-h-screen md:h-screen md:overflow-hidden flex flex-col ${bg} text-[11px] leading-[1.4]`}
    >
      {/* ── NAV desktop ── */}
      <nav className="hidden md:grid shrink-0 px-5 py-3 text-[13px]" style={COLS}>
        <button
          className="text-left hover:opacity-60"
          onClick={() => setView("home")}
        >
          Ma-Samba DIA
        </button>
        <button
          className="text-left hover:opacity-60"
          onClick={() => setView(view === "info" ? "home" : "info")}
        >
          info
        </button>
        <span>Compétences</span>
        <div className="flex justify-between">
          <span>Contact</span>
          <button className="hover:opacity-60" onClick={() => setDark(!dark)}>
            sombre·clair
          </button>
        </div>
      </nav>

      {/* ── NAV mobile ── */}
      <nav className="flex md:hidden shrink-0 px-5 py-3 text-[13px] justify-between">
        <button
          className="hover:opacity-60"
          onClick={() => setView("home")}
        >
          Ma-Samba DIA
        </button>
        <button
          className="hover:opacity-60"
          onClick={() => setView(view === "info" ? "home" : "info")}
        >
          info
        </button>
        <button className="hover:opacity-60" onClick={() => setDark(!dark)}>
          sombre·clair
        </button>
      </nav>

      {/* ── HOME ── */}
      {view === "home" && (
        <>
          {/* Desktop grid */}
          <div className="hidden md:grid md:flex-1 px-5 pt-3 overflow-hidden" style={COLS}>
            <div />
            <p className="leading-relaxed pr-8">{BIO}</p>
            <div className="pr-4">
              {SKILLS.map((s) => (
                <div key={s}>{s}</div>
              ))}
            </div>
            <div>
              <ContactBlock />
            </div>
          </div>

          {/* Mobile stack */}
          <div className="flex flex-col md:hidden px-5 pt-3 gap-6">
            <p className="leading-relaxed">{BIO}</p>
            <div>
              {SKILLS.map((s) => (
                <div key={s}>{s}</div>
              ))}
            </div>
            <div>
              <ContactBlock />
            </div>
          </div>

          <div className="px-5 pb-5 pt-2 shrink-0 flex justify-between items-end">
            <div className="text-[13px]">
              <div className="mb-2">Projets :</div>
              <ul>
                {PROJECTS.map((p, i) => (
                  <li key={i}>
                    <button
                      onClick={() => openProject(i)}
                      className="text-left hover:opacity-60"
                    >
                      {p.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>©Ma-Samba Dia. All Rights Reserved.</div>
          </div>
        </>
      )}

      {/* ── PROJECT ── */}
      {view === "project" && (
        <>
          {/* Zone cliquable au-dessus → HOME — desktop only */}
          <div
            className="hidden md:grid shrink-0 px-5 pt-3 pb-3 cursor-pointer"
            style={COLS}
            onClick={() => setView("home")}
          >
            <div />
            <div />
            <div />
            <div>
              <ContactBlock stopProp />
            </div>
          </div>

          {/* Mobile back + contact */}
          <div className="flex md:hidden px-5 pt-2 pb-3 justify-between">
            <button className="hover:opacity-60" onClick={() => setView("home")}>
              ← Retour
            </button>
            <div className="text-right">
              <ContactBlock />
            </div>
          </div>

          {/* Overlay — desktop */}
          <div
            className="hidden md:grid md:flex-1 overflow-hidden"
            style={{ gridTemplateColumns: "2fr 3fr" }}
          >
            <div className="px-5 py-3 flex flex-col overflow-hidden">
              <div className="flex justify-between mb-4">
                <span>Projet : {PROJECTS[active].name}</span>
                <span>Date : {PROJECTS[active].date}</span>
              </div>
              <div className="mb-4">
                <div className="mb-2">Description :</div>
                {PROJECTS[active].description.map((para, i) => (
                  <p key={i} className="leading-relaxed mb-2 last:mb-0">
                    {para}
                  </p>
                ))}
              </div>
              <div className="mb-4">
                <div className="mb-2">Rôle :</div>
                {PROJECTS[active].role.map((r) => (
                  <div key={r}>{r}</div>
                ))}
              </div>
              <div className="mt-auto flex items-center gap-8">
                <button className="hover:opacity-60" onClick={prev}>
                  ←——
                </button>
                {totalImages > 1 && (
                  <span>
                    {imgIdx + 1}/{totalImages}
                  </span>
                )}
                <button className="hover:opacity-60" onClick={next}>
                  ——→
                </button>
              </div>
            </div>
            <div className="h-full flex items-end justify-end overflow-hidden">
              {currentImage && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={currentImage}
                  alt=""
                  className="max-h-full max-w-full object-contain object-right-bottom"
                />
              )}
            </div>
          </div>

          {/* Overlay — mobile */}
          <div className="flex flex-col md:hidden px-5 pb-5 gap-4">
            <div className="flex justify-between">
              <span>Projet : {PROJECTS[active].name}</span>
              <span>Date : {PROJECTS[active].date}</span>
            </div>
            {currentImage && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={currentImage}
                alt=""
                className="w-full h-64 object-contain"
              />
            )}
            <div className="flex items-center gap-8">
              <button className="hover:opacity-60" onClick={prev}>
                ←——
              </button>
              {totalImages > 1 && (
                <span>
                  {imgIdx + 1}/{totalImages}
                </span>
              )}
              <button className="hover:opacity-60" onClick={next}>
                ——→
              </button>
            </div>
            <div>
              <div className="mb-2">Description :</div>
              {PROJECTS[active].description.map((para, i) => (
                <p key={i} className="leading-relaxed mb-2 last:mb-0">
                  {para}
                </p>
              ))}
            </div>
            <div>
              <div className="mb-2">Rôle :</div>
              {PROJECTS[active].role.map((r) => (
                <div key={r}>{r}</div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* ── INFO ── */}
      {view === "info" && (
        <>
          {/* Desktop grid — 1fr 3fr 1fr : photo+bio | CV centré | contact */}
          <div className="hidden md:grid md:flex-1 px-5 pt-3 overflow-hidden" style={INFO_COLS}>
            <div className="flex flex-col justify-center gap-6 pr-4">
              {INFO_PHOTO ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={INFO_PHOTO} alt="" className="w-36 h-44 object-cover" />
              ) : (
                <div className={`w-36 h-44 ${photo}`} />
              )}
              <p className="leading-relaxed">{BIO}</p>
            </div>
            <div className="flex items-center justify-center overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={CV_IMAGE} alt="" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="pl-4">
              <ContactBlock />
            </div>
          </div>

          {/* Mobile stack */}
          <div className="flex flex-col md:hidden px-5 pt-3 gap-6">
            <div className="flex gap-4 items-start">
              {INFO_PHOTO ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={INFO_PHOTO} alt="" className="w-24 h-32 object-cover shrink-0" />
              ) : (
                <div className={`w-24 h-32 shrink-0 ${photo}`} />
              )}
              <p className="leading-relaxed">{BIO}</p>
            </div>
            <div>
              <ContactBlock />
            </div>
          </div>

          <div className="px-5 pb-5 pt-2 shrink-0 flex justify-between items-end">
            <div className="text-[13px]">
              <ul>
                {PROJECTS.map((p, i) => (
                  <li key={i}>
                    <button
                      onClick={() => openProject(i)}
                      className="text-left hover:opacity-60"
                    >
                      {p.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>©Ma-Samba Dia. All Rights Reserved.</div>
          </div>
        </>
      )}
    </div>
  );
}
