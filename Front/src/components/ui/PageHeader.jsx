import { useState, useEffect } from "react";
import { Ellipsis } from "lucide-react";
import ColorPicker from "./ColorPicker";
import PageService from "../../services/PageService";

function PageHeader({ color, name }) {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [localColor, setLocalColor] = useState(color);

  const pageId = 1;

  useEffect(() => {
    setLocalColor(color);
  }, [color]);

  const handleColorChange = (newColor) => {
    PageService.updateColor(pageId, newColor)
      .then(() => {
        setLocalColor(newColor);
      })
      .catch((error) => {
        console.error("Error updating color:", error);
      });
  };

  const handleCloseColorPicker = () => {
    setShowColorPicker(false);
  };

  return (
    <div
      className={`bg-${localColor} w-full h-20 flex items-center px-10 justify-between gap-4`}
    >
      <div className="flex items-center gap-4 text-2xl">
        <span>{name}</span>
      </div>
      <button onClick={() => setShowColorPicker(!showColorPicker)}>
        <Ellipsis />
      </button>
      {showColorPicker && (
        <div className="absolute right-10 top-12">
          <ColorPicker
            onColorChange={handleColorChange}
            onClose={handleCloseColorPicker}
          />
        </div>
      )}
    </div>
  );
}

export default PageHeader;
