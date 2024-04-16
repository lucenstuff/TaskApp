import PropTypes from "prop-types";

export default function ColorPicker({ onColorChange, onClose }) {
  const handleColorClick = (color) => {
    onColorChange(color);
    onClose();
  };

  return (
    <div className="bg-neutral-700 grid rows-3 grid-cols-4 gap-2 p-2 rounded-md">
      <button onClick={() => handleColorClick("red-400")}>
        <div className="w-4 h-4 bg-red-400 rounded"></div>
      </button>
      <button onClick={() => handleColorClick("orange-400")}>
        <div className="w-4 h-4 bg-orange-400 rounded"></div>
      </button>
      <button onClick={() => handleColorClick("yellow-500")}>
        <div className="w-4 h-4 bg-yellow-500 rounded"></div>
      </button>
      <button onClick={() => handleColorClick("lime-500")}>
        <div className="w-4 h-4 bg-lime-500 rounded"></div>
      </button>
      <button onClick={() => handleColorClick("teal-400")}>
        <div className="w-4 h-4 bg-teal-400 rounded"></div>
      </button>
      <button onClick={() => handleColorClick("sky-400")}>
        <div className="w-4 h-4 bg-sky-400 rounded"></div>
      </button>
      <button onClick={() => handleColorClick("indigo-400")}>
        <div className="w-4 h-4 bg-indigo-400 rounded"></div>
      </button>
      <button onClick={() => handleColorClick("blue-400")}>
        <div className="w-4 h-4 bg-blue-400 rounded"></div>
      </button>
      <button onClick={() => handleColorClick("violet-400")}>
        <div className="w-4 h-4 bg-violet-400 rounded"></div>
      </button>
      <button onClick={() => handleColorClick("fuchsia-400")}>
        <div className="w-4 h-4 bg-fuchsia-400 rounded"></div>
      </button>
      <button onClick={() => handleColorClick("pink-400")}>
        <div className="w-4 h-4 bg-pink-400 rounded"></div>
      </button>
      <button onClick={() => handleColorClick("rose-400")}>
        <div className="w-4 h-4 bg-rose-400 rounded"></div>
      </button>
    </div>
  );
}

ColorPicker.propTypes = {
  onColorChange: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
