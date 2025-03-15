import { useState, useEffect } from "react";
import { useFood } from "./FoodContext";
import foods from "../data/products.json";
import FoodList from "./FoodList";
import FullScreenModal from "./FullScreenModal";

const FoodInput = () => {
  const { addFood } = useFood();
  const [query, setQuery] = useState("");
  const [filteredFoods, setFilteredFoods] = useState<Food[]>([]);
  const [selectedFood, setSelectedFood] = useState<Food | null>(null);
  const [grams, setGrams] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  interface Food {
    _id: { $oid: string };
    categories: string;
    weight: number;
    title: string;
    calories?: number;
    groupBloodNotAllowed: (boolean | null)[];
    __v: number;
  }
  

  useEffect(() => {
    if (query.length > 0) {
      const results = foods.filter((food) =>
        food.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredFoods(results);
    } else {
      setFilteredFoods([]);
    }
  }, [query]);

  const handleSelectFood = (food: Food) => {
    setSelectedFood(food);
    setQuery(food.title);
    setFilteredFoods([]);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddFood = () => {
    if (!selectedFood || grams === null || grams <= 0) return;

    const newFood = {
      title: selectedFood.title,
      grams,
      calories: selectedFood.calories ? (grams / 100) * selectedFood.calories : 0,
    };

    addFood(newFood);
    setQuery("");
    setSelectedFood(null);
    setGrams(null);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col mr-10">
      <div className="hidden sm:flex gap-10">
        <input
          type="text"
          placeholder="Enter product name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border-b w-50"
        />

        {filteredFoods.length > 0 && (
          <ul className="absolute bg-white border mt-13 max-h-60 max-w-50 overflow-y-auto">
            {filteredFoods.map((food) => (
              <li
                key={food._id.$oid}
                className="p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleSelectFood(food)}
              >
                {food.title}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-2 flex items-center">
          <input
            type="number"
            placeholder="Grams"
            value={grams ?? ""}
            onChange={(e) => setGrams(Number(e.target.value))}
            className="border-b p-2 w-20"
          />
          <button
            onClick={handleAddFood}
            className="bg-orange-400 text-white font-semibold ml-10 px-4 py-2 rounded shadow-xl"
          >
            +
          </button>
        </div>
      </div>

      <FoodList />

      {/* Open Modal Button */}
      <button
        onClick={handleOpenModal}
        className="flex self-center sm:hidden bg-orange-400 text-white font-semibold ml-10 px-4 py-2 rounded shadow-xl"
      >
        +
      </button>

      {/* Full-Screen  Modal*/}
      {isModalOpen && (
        <FullScreenModal
          query={query}
          setQuery={setQuery}
          grams={grams}
          setGrams={setGrams}
          handleAddFood={handleAddFood}
          handleCloseModal={handleCloseModal}
          foods={foods} 
          setSelectedFood={setSelectedFood}
        />
      )}
    </div>
  );
};

export default FoodInput;
