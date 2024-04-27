import { useState } from "react";
import Project from "./comps/projects";
import Modals from "./comps/modals";

const projects = [
  {
    title: "C2 Montreal",

    src: "c2montreal.png",

    color: "#000000",
  },

  {
    title: "Office Studio",

    src: "officestudio.png",

    color: "#8C8C8C",
  },

  {
    title: "Locomotive",

    src: "locomotive.png",

    color: "#EFE8D3",
  },

  {
    title: "Silencio",

    src: "silencio.png",

    color: "#706D63",
  },
];
export type ModalState = { active: boolean; index: number };
function Projects() {
  const [modal, setModal] = useState<ModalState>({ active: false, index: 0 });

  return (
    <main id="work" className="flex h-screen items-center justify-center">
      <div className="w-[1000px] flex flex-col items-center justify-center">
        {projects.map((project, index) => (
          <>
            <Project
              key={index}
              index={index}
              setModal={setModal}
              title={project.title}
            />
          </>
        ))}
      </div>
      <Modals modal={modal} projects={projects} />
    </main>
  );
}

export default Projects;
