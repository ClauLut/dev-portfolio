import ClutMockup from "./images/clut-dev-mockups.png";
import WalkydooMockup from "./images/walkydoo-mockups.png";
import SnapratMockup from "./images/snaprat-mockups.png";
import MainquestMockup from "./images/mainquest-mockups.png";


export interface IProject {
    title: string;
    desc: string;
    year: number;
    tech: string;
    image?: string;
    code?: string;
    design?: string;
    code_collabs?: number;
    design_collabs?: number;
    role?: string;
}
export const projects = [
  {
    title: "clut.dev Portfolio v2",
    year: 2026,
    desc: "Redesigned version of my personal developer portfolio with modern UI and animations.",
    tech: "HTML, CSS, TS",
    code: "https://github.com/ClauLut/dev-portfolio",
  },
  {
    title: "Mainquest App",
    image: MainquestMockup,
    year: 2026,
    desc: "Description Coming Soon! ...",
    tech: "React",
    code_collabs: 2,
    role: "Frontend Development & UI/UX Design",
    design:
      "https://www.figma.com/design/VWE0lB06MU897dX2LYyKNv/mainquest---pwa-design?node-id=1-16990&t=121fD6GLIadUGMBf-1",
  },
  {
    title: "Fitry App",
    image: "",
    year: 2023,
    desc: "",
    tech: "React, React Native, Firebase",
    code: "https://github.com/ClauLut/fitry",
    code_collabs: 2,
    design_collabs: 2,
    role: "Frontend Development & UI/UX Design",
    design:
      "https://www.figma.com/design/eHDFqk44ZWjvw0mEyfPqdf/Wireframes?node-id=7-2&t=vLFA54Lu3ym4QbZl-1",
  },
  // done
  {
    title: "Snaprat PWA",
    image: SnapratMockup,
    year: 2023,
    desc: "Snapchat-inspired Progressive Web App exploring camera access, push notifications and caching.",
    tech: "JavaScript, Firebase, PWA",
    code: "https://github.com/ClauLut/snaprat",
  },
  {
    title: "Walkydoo Site",
    image: WalkydooMockup,
    year: 2022,
    desc: "Website for discovering and sharing dog walking routes with interactive map integration.",
    tech: "PHP, PostgreSQL, Leaflet",
    code: "https://github.com/ClauLut/walkydoo",
  },
  {
    title: "clut.dev Portfolio v1",
    image: ClutMockup,
    year: 2021,
    desc: "First version of my personal developer portfolio with creative UI and animations.",
    tech: "HTML, SASS, JavaScript",
    code: "https://github.com/ClauLut/clut.dev",
  },
];