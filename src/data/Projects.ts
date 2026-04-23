import ClutMockup from "../images/clut-dev-mockups.png";
import WalkydooMockup from "../images/walkydoo-mockups.png";
import SnapratMockup from "../images/snaprat-mockups.png";
import MainquestMockup from "../images/mainquest-mockups.png";
import FitryMockup from "../images/fitry-mockups.png";


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
    title: "MainQuest PWA",
    image: MainquestMockup,
    year: 2026,
    desc: "MainQuest is a Progressive Web App designed to enhance the festival experience by helping users connect and coordinate within private groups. Users can plan their schedule by marking favorite acts, track each other’s locations on a live map, and quickly send an emergency alert if needed.",
    tech: "React, PWA, Java",
    code_collabs: 2,
    role: "Frontend Development & UI/UX Design",
    design:
      "https://www.figma.com/design/VWE0lB06MU897dX2LYyKNv/mainquest---pwa-design?node-id=1-16990&t=121fD6GLIadUGMBf-1",
  },
  {
    title: "Fitry App",
    image: FitryMockup,
    year: 2023,
    desc: "A fitness-focused web and mobile app, enabling users to create personalized workout plans, track progress, and share achievements within a social community feed.",
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