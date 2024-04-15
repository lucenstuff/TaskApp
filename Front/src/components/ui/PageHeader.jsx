import { useState } from "react";
import { Ellipsis } from "lucide-react";
import ColorPicker from "./ColorPicker";
import { EditText } from "react-edit-text";
import "react-edit-text/dist/index.css";

function PageHader({ name }) {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleNameChange = (event) => {
    setIsEditableName(event.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <div className="w-full bg-indigo-400 h-20 flex items-center px-10 justify-between gap-4">
      <div className="flex items-center gap-4 text-2xl">
        <EditText value={name} onChange={handleNameChange} />
      </div>
      <button onClick={() => setShowColorPicker(!showColorPicker)}>
        <Ellipsis />
      </button>
      {showColorPicker && (
        <div className="absolute right-10 top-12">
          <ColorPicker />
        </div>
      )}
    </div>
  );
}

export default PageHader;
