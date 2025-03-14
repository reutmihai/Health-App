import { useState, useEffect } from "react";
import { useFood } from "./FoodContext"; // Importă contextul
import foods from "../data/products.json";
import FoodList from "./FoodList";

const FoodInput = () => {
  interface Food {
    _id: { $oid: string };
    categories: string;
    weight: number;
    title: string;
    calories?: number;
    groupBloodNotAllowed: (boolean | null)[];
    __v: number;
  }

  const { addFood } = useFood();
  const [query, setQuery] = useState("");
  const [filteredFoods, setFilteredFoods] = useState<Food[]>([]);
  const [selectedFood, setSelectedFood] = useState<Food | null>(null);
  const [grams, setGrams] = useState<number | null>(null);

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
    setFilteredFoods([]); // Ascunde dropdown-ul
  };

  const handleAddFood = () => {
    if (!selectedFood || grams === null || grams <= 0) return;

    const newFood = {
      title: selectedFood.title,
      grams,
      calories: selectedFood.calories ? (grams / 100) * selectedFood.calories : 0,
    };

    addFood(newFood);
    setQuery(""); // Reset input
    setSelectedFood(null);
    setGrams(null); // Reset gramaj
  };

  return (
    <div className="flex flex-col">
      <div className="flex gap-10">
        <input
          type="text"
          placeholder="Enter product name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border-b w-50"
        />

        {filteredFoods.length > 0 && (
          <ul className="absolute bg-white border mt-1 max-h-60 overflow-y-auto">
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
    </div>
  );
};

export default FoodInput;
