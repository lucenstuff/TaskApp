import React, { useState } from "react";

function PrioritySelector() {
  const [selectedPriority, setSelectedPriority] = useState("Baja");

  const handlePriorityChange = (event) => {
    setSelectedPriority(event.target.value);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "Urgente":
        return "bg-red-500";
      case "Alta":
        return "bg-orange-500";
      case "Media":
        return "bg-blue-500";
      case "Baja":
        return "bg-green-500";
      default:
        return "";
    }
  };

  return (
    <div className="flex items-center ">
      <select
        value={selectedPriority}
        className={`rounded-md p-1 ${getPriorityColor(selectedPriority)}`}
        onChange={handlePriorityChange}
      >
        <option className="bg-red-500" value="Urgente">
          Urgente
        </option>
        <option className="bg-orange-500" value="Alta">
          Alta
        </option>
        <option className="bg-blue-500" value="Media">
          Media
        </option>
        <option className="bg-green-500" value="Baja">
          Baja
        </option>
      </select>
    </div>
  );
}

export default PrioritySelector;
