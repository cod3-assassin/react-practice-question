import React from "react";
import { FaBox, FaBoxOpen, FaTrashAlt, FaRedoAlt } from "react-icons/fa";

const NoteItem = ({
  note,
  onArchive,
  onUnarchive,
  onDelete,
  onRestore,
  onPermanentlyDelete,
}) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg mb-4">
      <p className="text-gray-800">{note.content}</p>
      <div className="flex justify-end space-x-2 mt-2">
        {onArchive && (
          <button
            className="text-blue-500 hover:text-blue-700"
            onClick={onArchive}
          >
            <FaBox />
          </button>
        )}
        {onUnarchive && (
          <button
            className="text-green-500 hover:text-green-700"
            onClick={onUnarchive}
          >
            <FaBoxOpen />
          </button>
        )}
        {onRestore && (
          <button
            className="text-green-500 hover:text-green-700"
            onClick={onRestore}
          >
            <FaRedoAlt />
          </button>
        )}
        {onPermanentlyDelete && (
          <button
            className="text-red-500 hover:text-red-700"
            onClick={onPermanentlyDelete}
          >
            <FaTrashAlt />
          </button>
        )}
        {onDelete && (
          <button
            className="text-red-500 hover:text-red-700"
            onClick={onDelete}
          >
            <FaTrashAlt />
          </button>
        )}
      </div>
    </div>
  );
};

export default NoteItem;
