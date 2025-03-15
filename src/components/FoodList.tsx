import { useFood } from "./FoodContext";

const FoodList = () => {
  const { foodList, removeFood } = useFood();

  return (
    <div>
      {foodList.length > 0 && (
        <ul className="mt-10 max-h-60 max-w-150 overflow-y-auto">
          {foodList.map((item, index) => (
            <li key={index} className="flex justify-between max-w-[200] max-h-200 overflow-y-auto text-sm">
              <span className="p-2 border-b border-gray-300 w-30">{item.title}</span>
              <span className="p-5 border-b border-gray-300 w-20">{item.grams}g</span>
              <span className="p-5 border-b border-gray-300 w-30">{item.calories.toFixed(2)} kcal</span>
              <button
                onClick={() => removeFood(index)}
                className="text-gray-300 font-semibold text-sm hover:text-red-500"
              >
                X
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FoodList;
