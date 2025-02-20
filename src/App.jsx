import { useState } from "react";

export default function Canva() {
  const [size, setSize] = useState(4);
  const [grid, setGrid] = useState(
    Array.from({ length: size }, () => Array(size).fill(false))
  );

  const toggleCell = (rowIndex, colIndex) => {
    setGrid((prevGrid) =>
      prevGrid.map((row, rIdx) =>
        rIdx === rowIndex
          ? row.map((cell, cIdx) => (cIdx === colIndex ? !cell : cell))
          : row
      )
    );
  };

  const changeGridSize = (newSize) => {
    setSize(newSize);
    setGrid(Array.from({ length: newSize }, () => Array(newSize).fill(false)));
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center space-y-4 w-full">
        <div className={`grid grid-cols-${size} gap-1 w-[${size * 10}px]`}>
          {grid.map((row, rowIndex) =>
            row.map((cell, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`w-10 h-10 border border-gray-400 cursor-pointer transition-colors duration-200 ${
                  rowIndex === 0 && colIndex === 0
                    ? "bg-blue-300 border-2 border-blue-600"
                    : cell
                    ? "bg-black"
                    : "bg-white"
                }`}
                onClick={() => toggleCell(rowIndex, colIndex)}
              />
            ))
          )}
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => changeGridSize(4)}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            4x4
          </button>
          <button
            onClick={() => changeGridSize(8)}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            8x8
          </button>
        </div>
      </div>
    </div>
  );
}
