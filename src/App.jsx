import { useState } from "react";

function App() {
  const [size, setSize] = useState(4);
  const [grid, setGrid] = useState(
    Array.from({ length: size }, () => Array(size).fill(false))
  );

  const toggleCell = (row, col) => {
    setGrid((prevGrid) =>
      prevGrid.map((r, rowIndex) =>
        r.map((cell, colIndex) =>
          rowIndex === row && colIndex === col ? !cell : cell
        )
      )
    );
  };

  const changeGridSize = (newSize) => {
    setSize(newSize);
    setGrid(Array.from({ length: newSize }, () => Array(newSize).fill(false)));
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div
        className="grid gap-1"
        style={{
          gridTemplateColumns: `repeat(${size}, 40px)`,
          gridTemplateRows: `repeat(${size}, 40px)`,
        }}
      >
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`w-10 h-10 border border-gray-400 cursor-pointer transition-colors duration-200 ${
                cell ? "bg-black" : "bg-white"
              }`}
              onClick={() => toggleCell(rowIndex, colIndex)}
            />
          ))
        )}
      </div>
      <div className="flex space-x-2 mt-4">
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
  );
}

export default App;
