import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import MobileUserBar from "./MobileUserbar";

interface FullScreenModalProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  grams: number | null;
  setGrams: React.Dispatch<React.SetStateAction<number | null>>;
  handleAddFood: () => void;
  handleCloseModal: () => void;
  foods: Food[];
  setSelectedFood: React.Dispatch<React.SetStateAction<Food | null>>;
}

interface Food {
  _id: { $oid: string };
  categories: string;
  weight: number;
  title: string;
  calories?: number;
  groupBloodNotAllowed: (boolean | null)[];
  __v: number;
}

const FullScreenModal: React.FC<FullScreenModalProps> = ({
  query,
  setQuery,
  grams,
  setGrams,
  handleAddFood,
  handleCloseModal,
  foods,
  setSelectedFood,
}) => {
  const [filteredFoods, setFilteredFoods] = useState<Food[]>([]);

  // Update products
  useEffect(() => {
    if (query.length > 0) {
      const results = foods.filter((food) =>
        food.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredFoods(results);
    } else {
      setFilteredFoods([]);
    }
  }, [query, foods]);

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col">
      {/* Navbar */}
      <Navbar />
      <MobileUserBar
        isSearchModalOpen={true}
        handleCloseModal={handleCloseModal}
      />

      {/* Content of form*/}
      <div className="flex flex-col justify-center items-center mt-20 p-4">
        <input
          type="text"
          placeholder="Enter product name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border-b p-2 w-3/4 mb-4"
        />

        {/* Filtred list */}
        {filteredFoods.length > 0 && (
          <ul className="flexbg-white border sm:mt-13 max-h-60 max-w-50 overflow-y-auto">
            {filteredFoods.map((food) => (
              <li
                key={food._id.$oid}
                className="p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => {
                  setQuery(food.title); // Set Title
                  setSelectedFood(food);
                  setFilteredFoods([]); // Hide List
                }}
              >
                {food.title}
              </li>
            ))}
          </ul>
        )}

        <input
          type="number"
          placeholder="Grams"
          value={grams ?? ""}
          onChange={(e) => setGrams(Number(e.target.value))}
          className="border-b p-2 w-3/4 mb-4"
        />

        <button
          onClick={handleAddFood}
          className="bg-orange-400 text-white font-semibold px-15 py-2 mt-10 rounded shadow-xl"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default FullScreenModal;
