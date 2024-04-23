import React from "react";
import { ModalState } from "../Projects";
interface GetIn {
  index: number;
  title: string;
  setModal: (newState: ModalState) => void; // Define the type of the setter function
}
function Project({ index, title, setModal }: GetIn) {
  return (
    <div
      onMouseOver={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className="project"
    >
      <h2>{title}</h2>
      <p>Design & Development</p>
    </div>
  );
}

export default Project;
