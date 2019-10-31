import React from "react";

import ToolPanel from "../../components/LeftPanelArea/ToolPanel";
import ToolsTopArea from "./ToolsTopArea";

const ToolsArea = props => {
  return (
    <div style={panel_container}>
      <ToolsTopArea
        auth={props.auth}
        saveImg={props.saveImg}
        handleScreenshot={props.handleScreenshot}
        updateProject={props.updateProject}
        projectTitle={props.projectTitle}
        handleChange={props.handleChange}
        image={props.image}
        saving={props.saving}
      />
      <ToolPanel addItem={props.addItem} />
    </div>
  );
};

const panel_container = {
  background: "#d0d0d0",
  width: "25%"
};

export default ToolsArea;
