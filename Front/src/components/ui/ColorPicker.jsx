function ColorPicker({ children, ...props }) {
  return (
    <div className="bg-neutral-700 grid rows-3 grid-cols-4 gap-2 p-2 rounded-md">
      <button>
        <div className="w-4 h-4 bg-red-400 rounded"></div>
      </button>
      <button>
        <div className="w-4 h-4 bg-orange-400 rounded"></div>
      </button>
      <button>
        <div className="w-4 h-4 bg-yellow-400 rounded"></div>
      </button>
      <button>
        <div className="w-4 h-4 bg-lime-400 rounded"></div>
      </button>
      <button>
        <div className="w-4 h-4 bg-teal-400 rounded"></div>
      </button>
      <button>
        <div className="w-4 h-4 bg-sky-400 rounded"></div>
      </button>
      <button>
        <div className="w-4 h-4 bg-indigo-400 rounded"></div>
      </button>
      <button>
        <div className="w-4 h-4 bg-blue-400 rounded"></div>
      </button>
      <button>
        <div className="w-4 h-4 bg-violet-400 rounded"></div>
      </button>
      <button>
        <div className="w-4 h-4 bg-fuchsia-400 rounded"></div>
      </button>
      <button>
        <div className="w-4 h-4 bg-pink-400 rounded"></div>
      </button>
      <button>
        <div className="w-4 h-4 bg-red-400 rounded"></div>
      </button>
    </div>
  );
}

export default ColorPicker;
