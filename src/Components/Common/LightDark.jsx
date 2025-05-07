import React from "react";

//constants
import { layoutModeTypes } from "../constants/layout";
import { CiDark, CiLight } from "react-icons/ci";

const LightDark = ({ layoutMode, onChangeLayoutMode }) => {
  const mode =
    layoutMode === layoutModeTypes["DARKMODE"]
      ? layoutModeTypes["LIGHTMODE"]
      : layoutModeTypes["DARKMODE"];

  return (
    <div className="ms-1 header-item d-none d-sm-flex">
      <button
        onClick={() => onChangeLayoutMode(mode)}
        type="button"
        className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle light-dark-mode shadow-none"
      >
        {layoutMode === "dark" ? <CiLight size={20} /> : <CiDark size={20} />}
      </button>
    </div>
  );
};

export default LightDark;
