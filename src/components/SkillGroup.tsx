import { motion } from "framer-motion";
import "./SkillGroup.css";

interface ISkillGroup {
  title: string;
  skills: string[];
}
export default function SkillGroup({ title, skills }: ISkillGroup) {
  return (
    <>
      <h4>{title}</h4>
      {skills.map((skill) => (
        <motion.span key={skill} whileHover={{ scale: 1.1 }}>
          {skill}
        </motion.span>
      ))}
    </>
  );
}
