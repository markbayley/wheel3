import React from "react";
import { setupWheel } from "./Wheel";

export function WheelInput() {
  const [outcome, setOutcome] = React.useState(null);
  React.useEffect(() => {
    setupWheel(setOutcome);
  }, []);
  return (
    <>
      <div id="container" className="centered">
        <canvas id="drawing_canvas" />
        <div id="status_label">loading...</div>
      </div>
    </>
  );
}
