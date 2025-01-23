import React from "react";

export default function Backdrop(): React.ReactElement {
  return (
    <React.Fragment>
      <div
        id="backdrop"
        className="absolute left-0 top-0 h-[929px] w-full bg-[url(/images/backdrop.png)] bg-cover bg-no-repeat opacity-80 mix-blend-color-burn"
      />
      <div
        id="gradiant"
        className="absolute left-0 top-0 h-[929px] w-full bg-gradient-to-t from-teal-400 to-blue-500 mix-blend-color-burn"
      />
    </React.Fragment>
  );
}
