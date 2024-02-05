import React from "react";
import AnimatedCursor from "react-animated-cursor";

function CustomCursor() {
  return (
    <div className="App">
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        trailingSpeed={15}
        outerScale={1}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "var(--blue)",
        }}
        outerStyle={{
          border: "3px solid var(--blue)",
        }}
        // clickables={[
        //   "a",
        //   'input[type="text"]',
        //   'input[type="email"]',
        //   'input[type="number"]',
        //   'input[type="submit"]',
        //   'input[type="image"]',
        //   "label[for]",
        //   "select",
        //   "textarea",
        //   "button",
        //   ".link",
        // ]}
      />
    </div>
  );
}

export default CustomCursor;
