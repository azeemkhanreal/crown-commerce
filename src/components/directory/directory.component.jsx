import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.components";
import { useSelector } from "react-redux";
import { selectDirectorySections } from "../../store/directory/directory.selectors";

const Directory = () => {
  const sections = selectDirectorySections(useSelector((state) => state));

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
