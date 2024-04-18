import { useState, useEffect } from "react";

function PrioritySelector({ priority, onPriorityChange, className }) {
  const [selectedPriority, setSelectedPriority] = useState(priority);

  const handlePriorityChange = (event) => {
    const newPriority = parseInt(event.target.value);
    setSelectedPriority(event.target.value);
    onPriorityChange(newPriority);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 1:
        return "bg-green-500";
      case 2:
        return "bg-blue-400";
      case 3:
        return "bg-orange-400";
      case 4:
        return "bg-red-400";
      default:
        return "bg-green-500";
    }
  };

  useEffect(() => {
    setSelectedPriority(priority);
  }, [priority]);

  return (
    <div className="flex items-center ">
      <select
        value={selectedPriority}
        className={`rounded-md p-1 ${getPriorityColor(
          selectedPriority
        )} ${className}`}
        onChange={handlePriorityChange}
      >
        <option className="bg-green-500" value={1}>
          Baja
        </option>
        <option className="bg-blue-400" value={2}>
          Media
        </option>
        <option className="bg-orange-300" value={3}>
          Alta
        </option>
        <option className="bg-red-400" value={4}>
          Urgente
        </option>
      </select>
    </div>
  );
}

export default PrioritySelector;
