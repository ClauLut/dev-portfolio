import "./ProjectCard.css";
import { motion } from "framer-motion";
import { ReactComponent as GitHub } from "../icons/github.svg";
import { ReactComponent as Figma } from "../icons/figma.svg";
import { ReactComponent as Role } from "../icons/account.svg";
import { ReactComponent as Collabs } from "../icons/users.svg";
import { IProject } from "../data/Projects";

interface IProjectCard {
  index: number;
  project: IProject;
}

export default function ProjectCard({ index: i, project: p }: IProjectCard) {
  return (
    <motion.div
      key={i}
      whileHover={{ scale: 1.03 }}
      className="card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.2 }}
    >
      {p.image && <img src={p.image} alt="mockup" width={300} />}
      <div className="content">
        <div>
          <div className="inline">
            <h4>{p.title} </h4>
            <div className="year-badge">
              <p> {p.year} </p>
            </div>
          </div>

          <div className="description">
            <p> {p.desc} </p>
            <p> {p.tech} </p>
          </div>
        </div>

        <div className="separator" />

        <div className="inline">
          {p.code ? (
            <a href={p.code} target="_blank" rel="noopener noreferrer">
              <GitHub className="github-icon" id="active" />
              Code
            </a>
          ) : (
            <div className="inline-small">
              <GitHub className="github-icon" id="disabled" />
              <p>
                Code <br /> Coming soon!
              </p>
            </div>
          )}

          {p.code_collabs && (
            <div className="badge">
              <Collabs className="collabs-icon" />
              <p>{p.code_collabs} Collaborators</p>
            </div>
          )}
        </div>

        {p.design && (
          <div className="inline">
            <a href={p.design} target="_blank" rel="noopener noreferrer">
              <Figma className="icon" id="active" />
              Design
            </a>

            {p.design_collabs && (
              <div className="badge">
                <Collabs className="collabs-icon" />
                <p>{p.design_collabs} Collaborators</p>
              </div>
            )}
          </div>
        )}

        {p.role && (
          <div className="inline-small">
            <Role className="icon" />
            <p>
              Role <br /> {p.role}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
