import React, { useState } from "react";

function PrioritySelector() {
  const [selectedPriority, setSelectedPriority] = useState(0);

  const handlePriorityClick = (priority) => {
    setSelectedPriority(priority);
  };

  const renderPriorityBalls = () => {
    const balls = [];
    for (let i = 1; i <= 5; i++) {
      balls.push(
        <div
          key={i}
          className={`w-6 h-6 mx-1 cursor-pointer rounded-full border-2 border-neutral-200 ${
            i <= selectedPriority ? "bg-neutral-200" : ""
          }`}
          onClick={() => handlePriorityClick(i)}
        />
      );
    }
    return balls;
  };

  return <div className="flex items-center">{renderPriorityBalls()}</div>;
}

export default PrioritySelector;
