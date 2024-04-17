const buttonStyle = "w-5 h-5 hover:transform hover:scale-110 rounded";
const hoverStyle = "hover:shadow-sm hover:shadow-neutral-400";

export default function ColorPicker({ onColorChange, onClose }) {
  const handleColorClick = (color) => {
    onColorChange(color);
    onClose();
  };

  return (
    <div className="bg-neutral-700 grid rows-3 grid-cols-4 gap-2 p-2 rounded-md">
      <button onClick={() => handleColorClick("red-400")}>
        <div className={`${buttonStyle} ${hoverStyle} bg-red-400`}></div>
      </button>
      <button onClick={() => handleColorClick("orange-400")}>
        <div className={`${buttonStyle} ${hoverStyle} bg-orange-400`}></div>
      </button>
      <button onClick={() => handleColorClick("yellow-500")}>
        <div className={`${buttonStyle} ${hoverStyle} bg-yellow-500`}></div>
      </button>
      <button onClick={() => handleColorClick("lime-500")}>
        <div className={`${buttonStyle} ${hoverStyle} bg-lime-500`}></div>
      </button>
      <button onClick={() => handleColorClick("teal-400")}>
        <div className={`${buttonStyle} ${hoverStyle} bg-teal-400`}></div>
      </button>
      <button onClick={() => handleColorClick("sky-400")}>
        <div className={`${buttonStyle} ${hoverStyle} bg-sky-400`}></div>
      </button>
      <button onClick={() => handleColorClick("indigo-400")}>
        <div className={`${buttonStyle} ${hoverStyle} bg-indigo-400`}></div>
      </button>
      <button onClick={() => handleColorClick("blue-400")}>
        <div className={`${buttonStyle} ${hoverStyle} bg-blue-400`}></div>
      </button>
      <button onClick={() => handleColorClick("violet-400")}>
        <div className={`${buttonStyle} ${hoverStyle} bg-violet-400`}></div>
      </button>
      <button onClick={() => handleColorClick("fuchsia-400")}>
        <div className={`${buttonStyle} ${hoverStyle} bg-fuchsia-400`}></div>
      </button>
      <button onClick={() => handleColorClick("pink-400")}>
        <div className={`${buttonStyle} ${hoverStyle} bg-pink-400`}></div>
      </button>
      <button onClick={() => handleColorClick("rose-400")}>
        <div className={`${buttonStyle} ${hoverStyle} bg-rose-400`}></div>
      </button>
    </div>
  );
}
